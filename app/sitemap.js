import API_BASE_URL from "./config";

export default async function sitemap() {
  const baseUrl = "https://webfloratechnologies.com";

  // Main static routes
  const staticRoutes = [
    // Main Pages
    { route: "", priority: 1.0 },
    { route: "/services", priority: 0.95 },
    { route: "/about", priority: 0.85 },
    { route: "/contact", priority: 0.85 },
    { route: "/case-studies", priority: 0.8 },
    { route: "/blog", priority: 0.8 },
    { route: "/career", priority: 0.7 },

    // Core Service Pages
    { route: "/services/ai-chatbot-company-in-patna", priority: 0.95 },
    { route: "/services/website-development-company-in-patna", priority: 0.95 },
    { route: "/services/mobile-app-development-company-in-patna", priority: 0.9 },
    { route: "/services/software-development-company-in-patna", priority: 0.9 },
    { route: "/services/ai-automation-company-in-patna", priority: 0.95 },
    { route: "/services/digital-marketing-agency-in-patna", priority: 0.9 },

    // Legal Pages
    { route: "/privacy-policy", priority: 0.2 },
    { route: "/terms-of-service", priority: 0.2 },

    // Utility Pages
    { route: "/sitemap.xml", priority: 0.1 },
    { route: "/robots.txt", priority: 0.1 },
  ].map((item) => ({
    url: `${baseUrl}${item.route}`,
    lastModified: new Date().toISOString(),
    changeFrequency:
      item.priority >= 0.9
        ? "weekly"
        : item.priority >= 0.7
          ? "monthly"
          : "yearly",
    priority: item.priority,
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
