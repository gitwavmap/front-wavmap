// Site-wide metadata configuration
export const siteConfig = {
  name: "Wavmap",
  description: "Discover artists from the underground music community around the world",
  url: "https://wavmap.org",
  ogImage: "/og-image.png",
  twitter: "@wavmap",

  // Default metadata for pages
  pages: {
    home: {
      title: "Wavmap - Underground Music Community",
      description: "Discover and connect with artists from the underground music community around the world. Explore our interactive map and submit your profile.",
    },
    map: {
      title: "Artist Community Map - Wavmap",
      description: "Explore our interactive map to discover underground music artists from around the world. Filter by location, style, and activities.",
    },
    about: {
      title: "About - Wavmap",
      description: "Learn about Wavmap's mission to connect underground music artists and communities worldwide.",
    },
    blog: {
      title: "Blog - Wavmap",
      description: "Read the latest news, interviews, and stories from the underground music community.",
    },
    login: {
      title: "Login - Wavmap",
      description: "Sign in to your Wavmap account to manage your artist profile and connect with the community.",
    },
    register: {
      title: "Join the Community - Wavmap",
      description: "Create your artist profile and join the underground music community on Wavmap.",
    },
    dashboard: {
      title: "Dashboard - Wavmap",
      description: "Manage your artist profile, posts, and community connections.",
    }
  }
} as const;

// Helper function to get page metadata
export function getPageMetadata(page: keyof typeof siteConfig.pages, customTitle?: string, customDescription?: string) {
  const pageData = siteConfig.pages[page];
  return {
    title: customTitle || pageData.title,
    description: customDescription || pageData.description,
    fullTitle: customTitle ? `${customTitle} - ${siteConfig.name}` : pageData.title,
  };
}

// SEO metadata generator
export function generateMetadata(options: {
  title?: string;
  description?: string;
  path?: string;
  ogImage?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
}) {
  const {
    title = siteConfig.pages.home.title,
    description = siteConfig.description,
    path = '',
    ogImage = siteConfig.ogImage,
    type = 'website',
    publishedTime,
    modifiedTime
  } = options;

  const url = `${siteConfig.url}${path}`;

  return {
    title,
    description,
    canonical: url,
    openGraph: {
      type,
      url,
      title,
      description,
      image: `${siteConfig.url}${ogImage}`,
      siteName: siteConfig.name,
      publishedTime,
      modifiedTime,
    },
    twitter: {
      card: 'summary_large_image',
      site: siteConfig.twitter,
      title,
      description,
      image: `${siteConfig.url}${ogImage}`,
    }
  };
}