import { useEffect } from 'react';

interface DocumentHeadOptions {
  title: string;
  description?: string;
  canonicalPath?: string;
}

const SITE = 'Aeranto';
const BASE_URL = 'https://aeranto.com';

/**
 * Setzt document.title + Meta-Description (+ Canonical) pro Route.
 */
export function useDocumentHead({ title, description, canonicalPath }: DocumentHeadOptions) {
  useEffect(() => {
    document.title = title === SITE ? SITE : `${title} | ${SITE}`;

    if (description) {
      let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = 'description';
        document.head.appendChild(meta);
      }
      meta.content = description;
    }

    if (canonicalPath !== undefined) {
      let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.rel = 'canonical';
        document.head.appendChild(link);
      }
      link.href = `${BASE_URL}${canonicalPath}`;
    }
  }, [title, description, canonicalPath]);
}
