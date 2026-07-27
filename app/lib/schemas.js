// app/lib/schemas.js
/**
 * Master Schema.org Generator Utility for Webflora Technologies
 * Supports all 35 schema types for maximum SEO performance.
 */

export const BASE_URL = "https://webfloratechnologies.com";

// Company Defaults
export const COMPANY_INFO = {
  name: "Webflora Technologies",
  legalName: "Webflora Technologies",
  url: BASE_URL,
  logo: `${BASE_URL}/webflora-logo.svg`,
  image: `${BASE_URL}/webflora-logo.svg`,
  telephone: "+918540814729",
  email: ["hello@webfloratechnologies.com", "info@webfloratechnologies.com"],
  priceRange: "$$",
  udyam: "UDYAM-BR-26-0183379",
  address: {
    streetAddress: "NMCH College, Bajar Samiti, New Kunj Colony, Saketpuri",
    addressLocality: "Patna",
    addressRegion: "Bihar",
    postalCode: "800016",
    addressCountry: "IN"
  },
  geo: {
    latitude: "25.594095",
    longitude: "85.137566"
  },
  socials: [
    "https://www.linkedin.com/company/webfloratechnologies/",
    "https://www.instagram.com/webflora.technologies",
    "https://www.facebook.com/profile.php?id=61580014195502"
  ],
  founders: [
    {
      name: "Shashank Manohar",
      jobTitle: "Co-Founder & CTO",
      url: `${BASE_URL}/about`,
      image: `${BASE_URL}/team/shashank.jpg`,
      sameAs: [
        "https://www.linkedin.com/in/shashank-manohar-37204a278",
        "https://www.instagram.com/shashank__arr?igsh=MXM3NmhvYzh5cWlkZQ=="
      ]
    },
    {
      name: "Amitesh Kumar",
      jobTitle: "Co-Founder & CEO",
      url: `${BASE_URL}/about`,
      image: `${BASE_URL}/FounderPhoto/co-founder.webp`,
      sameAs: [
        "https://www.linkedin.com/in/amiteshkumarrr/",
        "https://www.instagram.com/amitesh.kumarr?igsh=MXNqdTZ5aTRmbXc0eA=="
      ]
    }
  ]
};

// 1. Organization Schema
export function buildOrganizationSchema(customData = {}) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    "name": COMPANY_INFO.name,
    "url": COMPANY_INFO.url,
    "logo": COMPANY_INFO.logo,
    "image": COMPANY_INFO.image,
    "description": "Webflora Technologies is the leading software company in Patna, Bihar, offering custom software, website development, mobile apps, and digital marketing.",
    "telephone": COMPANY_INFO.telephone,
    "email": COMPANY_INFO.email,
    "address": buildPostalAddressSchema(),
    "geo": buildGeoCoordinatesSchema(),
    "sameAs": COMPANY_INFO.socials,
    "founder": COMPANY_INFO.founders.map(f => buildPersonSchema(f)),
    "contactPoint": [
      buildContactPointSchema({ telephone: "+918540814729", contactType: "customer support" }),
      buildContactPointSchema({ telephone: "+918863081255", contactType: "technical support" })
    ],
    ...customData
  };
}

// 2. LocalBusiness Schema
export function buildLocalBusinessSchema(customData = {}) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${BASE_URL}/#localbusiness`,
    "name": COMPANY_INFO.name,
    "image": COMPANY_INFO.image,
    "url": COMPANY_INFO.url,
    "telephone": COMPANY_INFO.telephone,
    "email": COMPANY_INFO.email,
    "priceRange": COMPANY_INFO.priceRange,
    "address": buildPostalAddressSchema(),
    "geo": buildGeoCoordinatesSchema(),
    "openingHoursSpecification": [buildOpeningHoursSpecificationSchema()],
    ...customData
  };
}

// 3. ProfessionalService Schema
export function buildProfessionalServiceSchema(customData = {}) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${BASE_URL}/#professionalservice`,
    "name": COMPANY_INFO.name,
    "url": COMPANY_INFO.url,
    "image": COMPANY_INFO.image,
    "telephone": COMPANY_INFO.telephone,
    "priceRange": COMPANY_INFO.priceRange,
    "address": buildPostalAddressSchema(),
    "geo": buildGeoCoordinatesSchema(),
    ...customData
  };
}

// 4. WebSite Schema (with SearchAction)
export function buildWebSiteSchema(customData = {}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    "url": BASE_URL,
    "name": COMPANY_INFO.name,
    "description": "Leading custom software development, website design, and AI automation company in Patna, Bihar.",
    "publisher": {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      "name": COMPANY_INFO.name
    },
    "potentialAction": buildSearchActionSchema(),
    ...customData
  };
}

// 5. WebPage Schema
export function buildWebPageSchema({ name, description, url }) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url || BASE_URL}/#webpage`,
    "url": url || BASE_URL,
    "name": name || COMPANY_INFO.name,
    "description": description || "Software Development and Digital Agency in Patna, Bihar",
    "isPartOf": {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`
    }
  };
}

// 6. Person Schema
export function buildPersonSchema({ name, jobTitle, url, image, sameAs }) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": name,
    "jobTitle": jobTitle || "Software Specialist",
    ...(url && { "url": url }),
    ...(image && { "image": image }),
    ...(sameAs && { "sameAs": sameAs }),
    "worksFor": {
      "@type": "Organization",
      "name": COMPANY_INFO.name
    }
  };
}

// 7. Service Schema
export function buildServiceSchema({ name, serviceType, description, providerUrl, areaServed = "India" }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "serviceType": serviceType || name,
    "description": description,
    "provider": {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      "name": COMPANY_INFO.name,
      "url": BASE_URL
    },
    "areaServed": {
      "@type": "Country",
      "name": areaServed
    }
  };
}

// 8. SoftwareApplication Schema
export function buildSoftwareApplicationSchema({ name, operatingSystem = "All", applicationCategory = "BusinessApplication", offers, aggregateRating, description, image, url = BASE_URL }) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": name,
    "image": image || COMPANY_INFO.image,
    "operatingSystem": operatingSystem,
    "applicationCategory": applicationCategory,
    "description": description,
    "author": {
      "@type": "Organization",
      "name": COMPANY_INFO.name,
      "url": BASE_URL
    },
    ...(offers && { "offers": buildOfferSchema({ ...(typeof offers === "object" ? offers : {}), url }) }),
    ...(aggregateRating && { "aggregateRating": buildAggregateRatingSchema(aggregateRating) })
  };
}

// 9. Product Schema
export function buildProductSchema({ name, description, image, offers, aggregateRating, category = "Software", url = BASE_URL }) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": name,
    "image": image || COMPANY_INFO.image,
    "description": description,
    "category": category,
    "brand": {
      "@type": "Brand",
      "name": COMPANY_INFO.name
    },
    "offers": buildOfferSchema({ ...(typeof offers === "object" ? offers : {}), url }),
    ...(aggregateRating && { "aggregateRating": buildAggregateRatingSchema(aggregateRating) })
  };
}

// 10. Offer Schema
export function buildOfferSchema(offerData = {}) {
  const { price, priceCurrency = "INR", priceValidUntil = "2026-12-31", validFrom = "2024-01-01", availability = "https://schema.org/InStock", url = BASE_URL } = offerData || {};
  const cleanedPrice = (price !== undefined && price !== null && !isNaN(Number(String(price).replace(/[^0-9.]/g, ''))))
    ? String(price).replace(/[^0-9.]/g, '')
    : "0";
  return {
    "@context": "https://schema.org",
    "@type": "Offer",
    "price": cleanedPrice,
    "priceCurrency": priceCurrency || "INR",
    "priceValidUntil": priceValidUntil,
    "validFrom": validFrom,
    "availability": availability,
    "url": url || BASE_URL,
    "hasMerchantReturnPolicy": {
      "@type": "MerchantReturnPolicy",
      "applicableCountry": "IN",
      "returnPolicyCategory": "https://schema.org/MerchantReturnNotPermitted"
    },
    "shippingDetails": {
      "@type": "OfferShippingDetails",
      "shippingRate": {
        "@type": "MonetaryAmount",
        "value": "0",
        "currency": priceCurrency || "INR"
      },
      "shippingDestination": {
        "@type": "DefinedRegion",
        "addressCountry": "IN"
      },
      "deliveryTime": {
        "@type": "ShippingDeliveryTime",
        "handlingTime": {
          "@type": "QuantitativeValue",
          "minValue": 0,
          "maxValue": 0,
          "unitCode": "DAY"
        },
        "transitTime": {
          "@type": "QuantitativeValue",
          "minValue": 0,
          "maxValue": 0,
          "unitCode": "DAY"
        }
      }
    },
    "seller": {
      "@type": "Organization",
      "name": COMPANY_INFO.name
    }
  };
}

// 11. FAQPage Schema
export function buildFAQPageSchema(faqs = []) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

// 12. BreadcrumbList Schema
export function buildBreadcrumbListSchema(items = []) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url ? (item.url.startsWith("http") ? item.url : `${BASE_URL}${item.url}`) : BASE_URL
    }))
  };
}

// 13. BlogPosting Schema
export function buildBlogPostingSchema({ title, description, url, image, datePublished, dateModified, authorName, faqs }) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": description,
    "url": url,
    "image": image || COMPANY_INFO.image,
    "datePublished": datePublished || "2024-01-01",
    "dateModified": dateModified || datePublished || "2026-01-01",
    "author": buildPersonSchema({ name: authorName || "Webflora Team" }),
    "publisher": {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      "name": COMPANY_INFO.name,
      "logo": {
        "@type": "ImageObject",
        "url": COMPANY_INFO.logo
      }
    },
    "speakable": buildSpeakableSpecificationSchema({ cssSelector: [".blog-title", ".blog-content"] }),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    }
  };
}

// 14. Article Schema
export function buildArticleSchema({ title, description, url, image, datePublished, authorName }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "url": url,
    "image": image || COMPANY_INFO.image,
    "datePublished": datePublished || "2024-01-01",
    "author": buildPersonSchema({ name: authorName || "Webflora Engineering" }),
    "publisher": {
      "@type": "Organization",
      "name": COMPANY_INFO.name
    }
  };
}

// 15. CollectionPage Schema
export function buildCollectionPageSchema({ name, description, url, items = [] }) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": name,
    "description": description,
    "url": url,
    "mainEntity": buildItemListSchema(items)
  };
}

// 16. ContactPage Schema
export function buildContactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Webflora Technologies",
    "description": "Get in touch with Webflora Technologies for custom software development, website design, and AI automation inquiries.",
    "url": `${BASE_URL}/contact`,
    "mainEntity": buildLocalBusinessSchema()
  };
}

// 17. AboutPage Schema
export function buildAboutPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Webflora Technologies",
    "description": "Learn about Webflora Technologies, Patna's premier software engineering agency led by co-founders Shashank Manohar & Amitesh Kumar.",
    "url": `${BASE_URL}/about`,
    "mainEntity": buildOrganizationSchema()
  };
}

// 18. Review Schema
export function buildReviewSchema({ authorName, reviewRating = 5, reviewBody, itemReviewed }) {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": authorName
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": reviewRating,
      "bestRating": 5,
      "worstRating": 1
    },
    "reviewBody": reviewBody,
    "itemReviewed": itemReviewed || {
      "@type": "LocalBusiness",
      "name": COMPANY_INFO.name,
      "image": COMPANY_INFO.image,
      "telephone": COMPANY_INFO.telephone,
      "url": BASE_URL,
      "address": buildPostalAddressSchema()
    }
  };
}

// 19. AggregateRating Schema
export function buildAggregateRatingSchema({ ratingValue = 4.9, reviewCount = 50, bestRating = 5, worstRating = 1, itemReviewed }) {
  return {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    "ratingValue": ratingValue,
    "reviewCount": reviewCount,
    "bestRating": bestRating,
    "worstRating": worstRating,
    "itemReviewed": itemReviewed || {
      "@type": "LocalBusiness",
      "name": COMPANY_INFO.name,
      "image": COMPANY_INFO.image,
      "telephone": COMPANY_INFO.telephone,
      "url": BASE_URL,
      "address": buildPostalAddressSchema()
    }
  };
}

// 20. CreativeWork Schema
export function buildCreativeWorkSchema({ name, description, author, dateCreated, image, url }) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": name,
    "description": description,
    "author": {
      "@type": "Organization",
      "name": author || COMPANY_INFO.name
    },
    ...(dateCreated && { "dateCreated": dateCreated }),
    ...(image && { "image": image }),
    ...(url && { "url": url })
  };
}

// 21. Project Schema
export function buildProjectSchema({ name, description, category, client, image, url }) {
  return {
    "@context": "https://schema.org",
    "@type": "Project",
    "name": name,
    "description": description,
    "category": category || "Software Engineering",
    ...(client && {
      "sponsor": {
        "@type": "Organization",
        "name": client
      }
    }),
    ...(image && { "image": image }),
    ...(url && { "url": url })
  };
}

// 22. ImageObject Schema
export function buildImageObjectSchema({ url, caption, height, width }) {
  return {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "contentUrl": url,
    "url": url,
    ...(caption && { "caption": caption }),
    ...(height && { "height": height }),
    ...(width && { "width": width })
  };
}

// 23. VideoObject Schema
export function buildVideoObjectSchema({ name, description, thumbnailUrl, uploadDate, embedUrl }) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": name,
    "description": description,
    "thumbnailUrl": thumbnailUrl,
    "uploadDate": uploadDate || "2024-01-01",
    ...(embedUrl && { "embedUrl": embedUrl })
  };
}

// 24. ImageGallery Schema
export function buildImageGallerySchema({ name, description, images = [] }) {
  return {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": name,
    "description": description,
    "image": images.map(img => typeof img === "string" ? buildImageObjectSchema({ url: img }) : buildImageObjectSchema(img))
  };
}

// 25. HowTo Schema
export function buildHowToSchema({ name, description, steps = [] }) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": name,
    "description": description,
    "step": steps.map((step, idx) => ({
      "@type": "HowToStep",
      "position": idx + 1,
      "name": step.name || `Step ${idx + 1}`,
      "text": step.text || step
    }))
  };
}

// 26. QAPage Schema
export function buildQAPageSchema({ mainQuestion, acceptedAnswer }) {
  return {
    "@context": "https://schema.org",
    "@type": "QAPage",
    "mainEntity": {
      "@type": "Question",
      "name": mainQuestion,
      "answerCount": 1,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": acceptedAnswer
      }
    }
  };
}

// 27. SearchAction Schema (and 35. WebSite SearchAction)
export function buildSearchActionSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SearchAction",
    "target": `${BASE_URL}/?s={search_term_string}`,
    "query-input": "required name=search_term_string"
  };
}

// 28. SiteNavigationElement Schema
export function buildSiteNavigationElementSchema(items = []) {
  const defaultItems = [
    { name: "Home", url: `${BASE_URL}` },
    { name: "About Us", url: `${BASE_URL}/about` },
    { name: "Services", url: `${BASE_URL}/it-company-in-patna` },
    { name: "Attendance Software", url: `${BASE_URL}/attendance-management-software` },
    { name: "EHR Software", url: `${BASE_URL}/electronic-health-records-software` },
    { name: "Case Studies", url: `${BASE_URL}/case-studies` },
    { name: "Blog", url: `${BASE_URL}/blog` },
    { name: "Contact", url: `${BASE_URL}/contact` }
  ];
  const list = items.length > 0 ? items : defaultItems;
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": list.map((nav, index) => ({
      "@type": "SiteNavigationElement",
      "position": index + 1,
      "name": nav.name,
      "url": nav.url
    }))
  };
}

// 29. ItemList Schema
export function buildItemListSchema(items = []) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": typeof item === "string" ? item : (item.name || item.title || `Item ${index + 1}`),
      ...(item.url && { "url": item.url.startsWith("http") ? item.url : `${BASE_URL}${item.url}` })
    }))
  };
}

// 30. PostalAddress Schema
export function buildPostalAddressSchema(customAddr = {}) {
  const addr = { ...COMPANY_INFO.address, ...customAddr };
  return {
    "@context": "https://schema.org",
    "@type": "PostalAddress",
    "streetAddress": addr.streetAddress,
    "addressLocality": addr.addressLocality,
    "addressRegion": addr.addressRegion,
    "postalCode": addr.postalCode,
    "addressCountry": addr.addressCountry
  };
}

// 31. GeoCoordinates Schema
export function buildGeoCoordinatesSchema(customGeo = {}) {
  const geo = { ...COMPANY_INFO.geo, ...customGeo };
  return {
    "@context": "https://schema.org",
    "@type": "GeoCoordinates",
    "latitude": geo.latitude,
    "longitude": geo.longitude
  };
}

// 32. ContactPoint Schema
export function buildContactPointSchema({ telephone, contactType = "customer support", areaServed = "IN", languages = ["English", "Hindi"] } = {}) {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPoint",
    "telephone": telephone || COMPANY_INFO.telephone,
    "contactType": contactType,
    "areaServed": areaServed,
    "availableLanguage": languages
  };
}

// 33. OpeningHoursSpecification Schema
export function buildOpeningHoursSpecificationSchema({ dayOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens = "09:00", closes = "19:00" } = {}) {
  return {
    "@context": "https://schema.org",
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": dayOfWeek,
    "opens": opens,
    "closes": closes
  };
}

// 34. SpeakableSpecification Schema
export function buildSpeakableSpecificationSchema({ cssSelector = [".article-title", ".article-body"] } = {}) {
  return {
    "@context": "https://schema.org",
    "@type": "SpeakableSpecification",
    "cssSelector": cssSelector
  };
}

/**
 * Converts array of schema objects into a single valid Google-compliant @graph JSON-LD object.
 */
export function toGraphSchema(schemas) {
  const list = (Array.isArray(schemas) ? schemas : [schemas]).flat(Infinity).filter(Boolean);
  const graph = list.map(item => {
    if (!item) return null;
    const { "@context": _, ...rest } = item;
    return rest;
  }).filter(Boolean);

  return {
    "@context": "https://schema.org",
    "@graph": graph
  };
}

/**
 * Next.js Helper Component for injecting Schema JSON-LD
 */
export function JsonLd({ data }) {
  if (!data) return null;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(toGraphSchema(data))
      }}
    />
  );
}

