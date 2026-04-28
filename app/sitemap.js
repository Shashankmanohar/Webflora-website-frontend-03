export default async function sitemap() {
  const baseUrl = "https://webfloratechnologies.com";

  // Main static routes
  const routes = [
    "",
    "/about",
    "/blog",
    "/career",
    "/contact",
    "/services",
    "/services/web-development",
    "/services/app-development",
    "/services/software-development",
    "/services/ai-automation",
    "/services/social-media-marketing",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));

  // Mock dynamic blog routes (In a real app, fetch these from your DB/CMS)
  const blogPosts = [1, 2, 3, 4, 5, 6].map((id) => ({
    url: `${baseUrl}/blog/${id}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...routes, ...blogPosts];
}
