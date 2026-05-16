const fs = require('fs');
const path = require('path');

const servicesDir = path.join(__dirname, 'app/services');
const folders = ['app-development', 'software-development', 'ai-automation', 'digital-marketing', 'social-media-marketing'];

folders.forEach(folder => {
  const filePath = path.join(servicesDir, folder, 'page.jsx');
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // We want to insert the BreadcrumbList and FAQPage schemas just before the `</>` at the end of the file.
    // The previous structure ends with `</>\n  );\n};\n\nexport default page;` or similar.
    const schemaToAdd = `
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://webfloratechnologies.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Services",
                "item": "https://webfloratechnologies.com/services"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": data.title,
                "item": \`https://webfloratechnologies.com/services/${folder}\`
              }
            ]
          })
        }}
      />
      {data.faqs && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": data.faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            })
          }}
        />
      )}
    </>`;
    
    // Check if it's already added to prevent duplicates
    if (!content.includes('BreadcrumbList')) {
      content = content.replace('</>', schemaToAdd + '\n    </>');
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated schemas in ${folder}`);
    } else {
      console.log(`Schemas already exist in ${folder}`);
    }
  } else {
    console.log(`File not found: ${filePath}`);
  }
});
