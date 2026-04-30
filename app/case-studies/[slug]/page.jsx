import React from "react";
import PortfolioClient from "./PortfolioClient";
import API_BASE_URL from "../../config";

export async function generateMetadata({ params }) {
  const resolvedParams = await Promise.resolve(params);
  const slug = resolvedParams.slug;

  try {
    const res = await fetch(`${API_BASE_URL}/api/public/case-studies/${slug}`, { 
      next: { revalidate: 60 } 
    });
    
    if (!res.ok) {
      return {
        title: "Project Not Found | Webflora Technologies",
        description: "The requested case study could not be found."
      };
    }
    
    const project = await res.json();
    
    const title = `${project.title} | Case Study | Webflora Technologies`;
    const description = project.description || `Read about how Webflora Technologies delivered success for ${project.client || project.title}.`;
    const url = `https://webfloratechnologies.com/case-studies/${slug}`;
    const imageUrl = project.image.startsWith('http') ? project.image : `https://webfloratechnologies.com/${project.image}`;

    return {
      title: title,
      description: description,
      icons: {
        icon: "/title-logo.png",
      },
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
            alt: project.title,
          }
        ],
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
      title: "Case Studies | Webflora Technologies",
      description: "Explore our successful projects and case studies."
    };
  }
}

export default async function PortfolioPage() {
  return <PortfolioClient />;
}
