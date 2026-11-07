import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SITE_CONFIG } from '../seo/seoConfig';

/**
 * Universal SEO & Social Metadata Component for SAM GREEN POWER SOLUTIONS
 * Renders verified Document Head tags, Open Graph, Twitter Cards, Canonical URLs, and JSON-LD structured data.
 */
export default function SEO({
  title,
  description,
  keywords,
  canonical,
  ogType = 'website',
  image = SITE_CONFIG.defaultImage,
  imageAlt = 'SAM GREEN POWER SOLUTIONS - Solar Energy Solutions',
  schemas = [],
  noindex = false,
}) {
  const currentTitle = title || `${SITE_CONFIG.name} | ${SITE_CONFIG.tagline}`;
  const currentDescription = description || 'Leading solar energy solutions and turnkey rooftop installations across Andhra Pradesh and Telangana.';
  const currentCanonical = canonical || SITE_CONFIG.url;
  const currentImage = image ? (image.startsWith('http') ? image : `${SITE_CONFIG.url}${image}`) : SITE_CONFIG.defaultImage;
  const robotsDirective = noindex
    ? 'noindex, nofollow'
    : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

  // Normalize schemas to array and remove null/undefined entries
  const schemaList = (Array.isArray(schemas) ? schemas : [schemas]).filter(Boolean);

  return (
    <Helmet>
      {/* Primary HTML Meta Tags */}
      <title>{currentTitle}</title>
      <meta name="description" content={currentDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={robotsDirective} />
      <meta name="googlebot" content={robotsDirective} />
      <link rel="canonical" href={currentCanonical} />

      {/* Brand & Regional Metadata */}
      <meta name="author" content={SITE_CONFIG.legalName} />
      <meta name="application-name" content={SITE_CONFIG.name} />
      <meta name="theme-color" content={SITE_CONFIG.themeColor} />
      <meta name="geo.region" content={SITE_CONFIG.geo.region} />
      <meta name="geo.placename" content={SITE_CONFIG.geo.placename} />

      {/* Open Graph / Facebook */}
      <meta property="og:site_name" content={SITE_CONFIG.name} />
      <meta property="og:title" content={currentTitle} />
      <meta property="og:description" content={currentDescription} />
      <meta property="og:url" content={currentCanonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={currentImage} />
      <meta property="og:image:secure_url" content={currentImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:locale" content={SITE_CONFIG.locale} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={currentTitle} />
      <meta name="twitter:description" content={currentDescription} />
      <meta name="twitter:image" content={currentImage} />
      <meta name="twitter:image:alt" content={imageAlt} />

      {/* Structured Data (JSON-LD) */}
      {schemaList.map((schema, index) => (
        <script key={`schema-${index}`} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}

