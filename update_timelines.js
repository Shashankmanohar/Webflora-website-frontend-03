const fs = require("fs");
const path = require("path");

const servicesPath = "c:/Users/shash/Downloads/Webflora-website/Frontend/data/services.ts";
const dataJsPath = "c:/Users/shash/Downloads/Webflora-website/Frontend/app/it-company-in-patna/data.js";

// Update services.ts
if (fs.existsSync(servicesPath)) {
  let content = fs.readFileSync(servicesPath, "utf8");

  const timelines = {
    "Startup Website": "7-21 Days",
    "Custom E-Commerce": "15-30 Days",
    "Premium UI Design": "5-10 Days",
    "Enterprise Brand System": "10-20 Days",
    "MVP Mobile App": "20-45 Days",
    "Custom Enterprise App": "35-60 Days",
    "SaaS Starter": "15-30 Days",
    "Custom Enterprise Suite": "30-60 Days",
    "AI Chatbot Starter": "10-20 Days",
    "Enterprise AI Agent": "20-40 Days",
    "Modular ERP Setup": "15-30 Days",
    "Enterprise Custom Suite": "30-60 Days",
    "Sales Pipeline CRM": "15-30 Days",
    "Enterprise Custom CRM": "30-60 Days",
    "Bihar Local Visibility": "Ongoing",
    "Pan-India Scale Plan": "Ongoing",
    "Organic Search Authority": "Ongoing",
    "National Enterprise SEO": "Ongoing",
    "Bespoke UI Design": "7-15 Days",
    "Complete Design System": "15-30 Days",
    "Workflow Auto Sync": "10-25 Days",
    "Enterprise Workflow Suite": "20-40 Days",
    "Cloud Migration Base": "10-20 Days",
    "Devops Cluster Setup": "20-45 Days"
  };

  // We find pricing blocks and append the timeline property dynamically
  for (const [name, timeline] of Object.entries(timelines)) {
    // Regex to match the pricing block for this plan
    // Looks for name: "Plan Name", subtitle: ..., price: ..., period: ..., features: [...], popular: true/false
    const escName = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(name:\\s*["']${escName}["'],[\\s\\S]*?popular:\\s*(true|false))(\\s*})`, "g");
    content = content.replace(regex, `$1,\n        timeline: "${timeline}"$3`);

    // For data.js (json format)
    const jsonRegex = new RegExp(`("name":\\s*["']${escName}["'],[\\s\\S]*?"popular":\\s*(true|false))(\\s*})`, "g");
  }

  fs.writeFileSync(servicesPath, content, "utf8");
  console.log("Updated timelines in services.ts");
}

// Update data.js
if (fs.existsSync(dataJsPath)) {
  let content = fs.readFileSync(dataJsPath, "utf8");

  const timelines = {
    "Startup Website": "7-21 Days",
    "Custom E-Commerce": "15-30 Days",
    "Premium UI Design": "5-10 Days",
    "Enterprise Brand System": "10-20 Days",
    "MVP Mobile App": "20-45 Days",
    "Custom Enterprise App": "35-60 Days",
    "SaaS Starter": "15-30 Days",
    "Custom Enterprise Suite": "30-60 Days",
    "AI Chatbot Starter": "10-20 Days",
    "Enterprise AI Agent": "20-40 Days",
    "Modular ERP Setup": "15-30 Days",
    "Enterprise Custom Suite": "30-60 Days",
    "Sales Pipeline CRM": "15-30 Days",
    "Enterprise Custom CRM": "30-60 Days",
    "Bihar Local Visibility": "Ongoing",
    "Pan-India Scale Plan": "Ongoing",
    "National Scale Plan": "Ongoing",
    "Organic Search Authority": "Ongoing",
    "National Enterprise SEO": "Ongoing",
    "Bespoke UI Design": "7-15 Days",
    "Complete Design System": "15-30 Days",
    "Workflow Auto Sync": "10-25 Days",
    "Enterprise Workflow Suite": "20-40 Days",
    "Cloud Migration Base": "10-20 Days",
    "Devops Cluster Setup": "20-45 Days"
  };

  for (const [name, timeline] of Object.entries(timelines)) {
    const escName = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`("name":\\s*["']${escName}["'],[\\s\\S]*?"popular":\\s*(true|false))([\\s\\S]*?})`, "g");
    
    // We check if it already has "timeline" in the matched block to avoid double injection
    content = content.replace(regex, (match, p1, p2, p3) => {
      if (match.includes("timeline")) return match;
      // Find the last property or just insert it after popular
      return `${p1},\n        "timeline": "${timeline}"${p3}`;
    });
  }

  fs.writeFileSync(dataJsPath, content, "utf8");
  console.log("Updated timelines in data.js");
}
