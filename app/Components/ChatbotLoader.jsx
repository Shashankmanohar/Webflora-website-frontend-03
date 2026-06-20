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
    .chatbot-launcher { bottom: 20px !important; right: 20px !important; }
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
        injectChatbotStyle(container.shadowRoot);
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

    function handleInteraction() {
      if (loaded) return;
      loaded = true;
      // Remove all event listeners once triggered
      TRIGGER_EVENTS.forEach((e) =>
        window.removeEventListener(e, handleInteraction)
      );
      clearTimeout(timer);
      loadChatbot();
    }

    const TRIGGER_EVENTS = ["scroll", "mousemove", "touchstart", "click", "keydown"];
    TRIGGER_EVENTS.forEach((e) =>
      window.addEventListener(e, handleInteraction, { once: true, passive: true })
    );

    // Fallback: load after 12s even if no interaction (e.g., idle visitor)
    const timer = setTimeout(handleInteraction, 12000);

    return () => {
      TRIGGER_EVENTS.forEach((e) =>
        window.removeEventListener(e, handleInteraction)
      );
      clearTimeout(timer);
    };
  }, []);

  return null; // renders nothing — side-effect only
}
