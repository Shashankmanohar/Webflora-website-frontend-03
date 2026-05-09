export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/private/",
      },
    ],
    sitemap: "https://webfloratechnologies.com/sitemap.xml",
  };
}
