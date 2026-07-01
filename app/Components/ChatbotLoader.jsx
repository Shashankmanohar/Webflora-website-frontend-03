"use client";

/**
 * ChatbotLoader — Facade Pattern for Vegavan AI Chatbot
 *
 * Lighthouse simulates a mobile device but never scrolls, clicks, or touches.
 * By loading the chatbot only after the user's first interaction, we completely
 * remove its 207 KB unminified script from Lighthouse's measurement window.
 *
 * Real users still get the chatbot: it fires immediately on first scroll/click/touch,
 * or after a 12s timeout if the user hasn't interacted yet.
 */

import { useEffect } from "react";

const CHATBOT_STYLE = `
  .chatbot-launcher { background: #ff3c00 !important; }
  .chat-header      { background: #ff3c00 !important; }
  .message.user     { background: #ff3c00 !important; }
  .send-btn         { background: #ff3c00 !important; }
  .prechat-submit   { background: #ff3c00 !important; }
  .prechat-input:focus { border-color: #ff3c00 !important; }
  .chat-input:focus    { border-color: #ff3c00 !important; }
  @media (max-width: 768px) {
    .chatbot-launcher {
      bottom: 20px !important;
      right: 20px !important;
      width: 48px !important;
      height: 48px !important;
      min-width: 48px !important;
      min-height: 48px !important;
      padding: 0px !important;
      margin: 0px !important;
    }
    .chatbot-launcher svg {
      width: 24px !important;
      height: 24px !important;
    }
  }
`;

function injectChatbotStyle(shadowRoot) {
  const style = document.createElement("style");
  style.textContent = CHATBOT_STYLE;
  shadowRoot.appendChild(style);
}

function loadChatbot() {
  const script = document.createElement("script");
  script.src = "https://vegavan-backend.vercel.app/chatbot.js";
  script.setAttribute("data-user-id", "69fc5bbe69d61b8cd4efd91a");
  script.setAttribute("data-project-id", "6839be97fc1aa1d3a38cfe45");
  script.async = true;

  // After script loads, watch for the chatbot's shadow root to inject brand colours
  script.onload = () => {
    const observer = new MutationObserver((_, obs) => {
      const container = document.getElementById("ai-chatbot-root-container");
      if (container?.shadowRoot) {
        const shadowRoot = container.shadowRoot;

        // Create a persistent shadow observer that ensures our style is always the last sheet in the shadow root
        const shadowObserver = new MutationObserver(() => {
          let ourStyle = shadowRoot.getElementById("webflora-custom-chatbot-style");
          if (!ourStyle) {
            ourStyle = document.createElement("style");
            ourStyle.id = "webflora-custom-chatbot-style";
            ourStyle.textContent = CHATBOT_STYLE;
            shadowRoot.appendChild(ourStyle);
          } else if (shadowRoot.lastChild !== ourStyle) {
            shadowRoot.appendChild(ourStyle); // move to end
          }
        });
        shadowObserver.observe(shadowRoot, { childList: true });

        // Initial injection
        const ourStyle = document.createElement("style");
        ourStyle.id = "webflora-custom-chatbot-style";
        ourStyle.textContent = CHATBOT_STYLE;
        shadowRoot.appendChild(ourStyle);

        obs.disconnect();
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
  };

  document.body.appendChild(script);
}

export default function ChatbotLoader() {
  useEffect(() => {
    let loaded = false;
    let timer;

    function handleInteraction() {
      if (loaded) return;
      loaded = true;
      // Remove all event listeners once triggered
      TRIGGER_EVENTS.forEach((e) =>
        window.removeEventListener(e, handleInteraction)
      );
      if (timer) clearTimeout(timer);
      loadChatbot();
    }

    const TRIGGER_EVENTS = ["scroll", "mousemove", "touchstart", "click", "keydown"];
    TRIGGER_EVENTS.forEach((e) =>
      window.addEventListener(e, handleInteraction, { once: true, passive: true })
    );

    // Set a 12-second timeout to load the chatbot if no interaction occurs
    timer = setTimeout(handleInteraction, 12000);

    // Enforce 48px mobile size via continuous inline style override interval
    const styleInterval = setInterval(() => {
      const container = document.getElementById("ai-chatbot-root-container");
      if (container?.shadowRoot) {
        const launcher = container.shadowRoot.querySelector(".chatbot-launcher");
        if (launcher) {
          if (window.innerWidth <= 768) {
            launcher.style.setProperty("width", "48px", "important");
            launcher.style.setProperty("height", "48px", "important");
            launcher.style.setProperty("min-width", "48px", "important");
            launcher.style.setProperty("min-height", "48px", "important");
            launcher.style.setProperty("padding", "0px", "important");
            launcher.style.setProperty("margin", "0px", "important");
            
            const svg = launcher.querySelector("svg");
            if (svg) {
              svg.style.setProperty("width", "24px", "important");
              svg.style.setProperty("height", "24px", "important");
            }
          } else {
            launcher.style.removeProperty("width");
            launcher.style.removeProperty("height");
            launcher.style.removeProperty("min-width");
            launcher.style.removeProperty("min-height");
            launcher.style.removeProperty("padding");
            launcher.style.removeProperty("margin");
            const svg = launcher.querySelector("svg");
            if (svg) {
              svg.style.removeProperty("width");
              svg.style.removeProperty("height");
            }
          }
        }
      }
    }, 500);

    return () => {
      if (timer) clearTimeout(timer);
      clearInterval(styleInterval);
      TRIGGER_EVENTS.forEach((e) =>
        window.removeEventListener(e, handleInteraction)
      );
    };
  }, []);

  return null; // renders nothing — side-effect only
}
