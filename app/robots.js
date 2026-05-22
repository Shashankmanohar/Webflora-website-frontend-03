export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/private/", "/admin", "/admin/login"],
      },
    ],
    sitemap: "https://webfloratechnologies.com/sitemap.xml",
  };
}
