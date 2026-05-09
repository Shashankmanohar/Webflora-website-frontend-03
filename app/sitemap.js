import API_BASE_URL from "./config";

export default async function sitemap() {
  const baseUrl = "https://webfloratechnologies.com";

  // Main static routes
  const staticRoutes = [
    "",
    "/about",
    "/blog",
    "/career",
    "/contact",
    "/case-studies",
    "/services",
    "/privacy-policy",
    "/terms-of-service",
    "/services/web-development",
    "/services/app-development",
    "/services/software-development",
    "/services/ai-automation",
    "/services/social-media-marketing",
    "/services/digital-marketing",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));

  // Fetch dynamic routes (Blogs & Case Studies)
  let blogs = [];
  let caseStudies = [];

  try {
    // We try to fetch the blogs and case studies. 
    // In a production build, ensure the backend is running or use fallback data if build fails.
    const [blogsRes, caseStudiesRes] = await Promise.all([
      fetch(`${API_BASE_URL}/api/public/blogs`, { next: { revalidate: 3600 } }).catch(() => null),
      fetch(`${API_BASE_URL}/api/public/case-studies`, { next: { revalidate: 3600 } }).catch(() => null)
    ]);

    if (blogsRes && blogsRes.ok) {
      blogs = await blogsRes.json();
    }
    if (caseStudiesRes && caseStudiesRes.ok) {
      caseStudies = await caseStudiesRes.json();
    }
  } catch (error) {
    console.error("Error fetching data for sitemap:", error);
  }

  const blogRoutes = Array.isArray(blogs) ? blogs.map((blog) => {
    const dateVal = blog.updatedAt || blog.createdAt;
    const isValidDate = dateVal && !isNaN(new Date(dateVal).getTime());
    return {
      url: `${baseUrl}/blog/${blog.slug}`,
      lastModified: isValidDate ? new Date(dateVal).toISOString() : new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.6,
    };
  }) : [];

  const caseStudyRoutes = Array.isArray(caseStudies) ? caseStudies.map((cs) => {
    const dateVal = cs.updatedAt || cs.createdAt;
    const isValidDate = dateVal && !isNaN(new Date(dateVal).getTime());
    return {
      url: `${baseUrl}/case-studies/${cs.slug}`,
      lastModified: isValidDate ? new Date(dateVal).toISOString() : new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.7,
    };
  }) : [];

  return [...staticRoutes, ...blogRoutes, ...caseStudyRoutes];
}
