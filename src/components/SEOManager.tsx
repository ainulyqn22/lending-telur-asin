import { useEffect } from "react";

interface SEOManagerProps {
  title: string;
  description: string;
  canonicalUrl: string;
  ogImage?: string;
  type?: string;
  schema?: Record<string, any> | Record<string, any>[];
}

export function SEOManager({
  title,
  description,
  canonicalUrl,
  ogImage = "https://kingtelur.com/src/assets/images/king_telur_logo_1783782954859.jpg",
  type = "website",
  schema,
}: SEOManagerProps) {
  useEffect(() => {
    // 1. Update Document Title
    document.title = title;

    // Helper to update or create meta tags
    const updateMetaTag = (attribute: string, attrValue: string, contentValue: string) => {
      let meta = document.querySelector(`meta[${attribute}="${attrValue}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attribute, attrValue);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", contentValue);
    };

    // 2. Standard Meta Tags
    updateMetaTag("name", "description", description);
    updateMetaTag("name", "robots", "index, follow");
    updateMetaTag("name", "author", "KING TELUR");
    updateMetaTag("name", "theme-color", "#F59E0B");

    // 3. Open Graph Tags
    updateMetaTag("property", "og:title", title);
    updateMetaTag("property", "og:description", description);
    updateMetaTag("property", "og:url", canonicalUrl);
    updateMetaTag("property", "og:type", type);
    updateMetaTag("property", "og:image", ogImage);
    updateMetaTag("property", "og:site_name", "KING TELUR");

    // 4. Twitter Cards
    updateMetaTag("name", "twitter:card", "summary_large_image");
    updateMetaTag("name", "twitter:title", title);
    updateMetaTag("name", "twitter:description", description);
    updateMetaTag("name", "twitter:image", ogImage);

    // 5. Update Canonical URL
    let canonicalLink = document.querySelector("link[rel='canonical']");
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", canonicalUrl);

    // 6. Structured Data (JSON-LD)
    // Remove existing dynamic script elements first
    const existingScripts = document.querySelectorAll("script[id^='jsonld-']");
    existingScripts.forEach((script) => script.remove());

    if (schema) {
      const schemasArray = Array.isArray(schema) ? schema : [schema];
      schemasArray.forEach((schemaObj, index) => {
        const script = document.createElement("script");
        script.id = `jsonld-${index}`;
        script.type = "application/ld+json";
        script.innerHTML = JSON.stringify(schemaObj);
        document.head.appendChild(script);
      });
    }

    return () => {
      // Clean up dynamic JSON-LD scripts on unmount if needed
      const cleanupScripts = document.querySelectorAll("script[id^='jsonld-']");
      cleanupScripts.forEach((script) => script.remove());
    };
  }, [title, description, canonicalUrl, ogImage, type, schema]);

  return null; // This component handles side effects only
}
