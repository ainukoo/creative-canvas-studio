import { useEffect } from "react";

type MetaTag = {
  name?: string;
  property?: string;
  content: string;
};

type SEOProps = {
  title?: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  meta?: MetaTag[];
};

function setMeta(selector: string, attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export function SEO({ title, description, ogTitle, ogDescription, ogImage, meta = [] }: SEOProps) {
  useEffect(() => {
    if (title) document.title = title;
    if (description) setMeta('meta[name="description"]', "name", "description", description);
    if (ogTitle) setMeta('meta[property="og:title"]', "property", "og:title", ogTitle);
    if (ogDescription)
      setMeta('meta[property="og:description"]', "property", "og:description", ogDescription);
    if (ogImage) setMeta('meta[property="og:image"]', "property", "og:image", ogImage);

    meta.forEach((m) => {
      if (m.name) setMeta(`meta[name="${m.name}"]`, "name", m.name, m.content);
      if (m.property)
        setMeta(`meta[property="${m.property}"]`, "property", m.property, m.content);
    });
  }, [title, description, ogTitle, ogDescription, ogImage, meta]);

  return null;
}
