import React from "react";
import BlogClient from "./BlogClient";
import API_BASE_URL from "../../config";

export async function generateMetadata({ params }) {
  const resolvedParams = await Promise.resolve(params);
  const slug = resolvedParams.id;

  try {
    const res = await fetch(`${API_BASE_URL}/api/public/blogs/${slug}`, { 
      next: { revalidate: 60 } 
    });
    
    if (!res.ok) {
      return {
        title: "Blog Not Found | Webflora Technologies",
        description: "The requested blog post could not be found."
      };
    }
    
    const post = await res.json();
    
    // Fallback description from content
    let description = post.description || post.excerpt;
    if (!description && post.content) {
       description = post.content.replace(/<[^>]+>/g, '').substring(0, 160).trim();
       if (post.content.length > 160) description += '...';
    } else if (!description) {
       description = "Read the latest insights and updates from Webflora Technologies.";
    }

    const title = `${post.title} | Webflora Technologies`;
    const url = `https://webfloratechnologies.com/blog/${slug}`;
    const imageUrl = post.image || "https://webfloratechnologies.com/default-og.jpg";

    return {
      title: title,
      description: description,
      keywords: `${post.category || 'tech blog'}, ${post.tags ? post.tags.join(', ') : ''}, webflora technologies blog, digital marketing insights india, web development trends, AI automation tutorials patna, software engineering best practices, top IT firm articles, technology news, SEO updates`,
      alternates: {
        canonical: url,
      },
      openGraph: {
        title: title,
        description: description,
        url: url,
        type: "article",
        siteName: "Webflora Technologies",
        images: [
          {
            url: imageUrl,
            width: 1200,
            height: 630,
            alt: post.title,
          }
        ],
        publishedTime: post.createdAt,
        authors: [post.author || "Webflora Team"],
      },
      twitter: {
        card: "summary_large_image",
        title: title,
        description: description,
        images: [imageUrl],
      }
    };
  } catch (error) {
    return {
      title: "Blog | Webflora Technologies",
      description: "Read the latest insights and updates from Webflora Technologies."
    };
  }
}

export default async function BlogPage() {
  return <BlogClient />;
}
