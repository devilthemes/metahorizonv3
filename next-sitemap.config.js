/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://metahorizon.com",
  generateRobotsTxt: true,
  exclude: [],
  changefreq: "daily",
  priority: 0.7,
  transform: async (config, path) => {
    // Custom priority for specific routes
    const customPriorities = {
      "/": 1.0,
      "/services": 0.9,
      "/products": 0.9,
      "/academy": 0.9,
      "/request-demo": 0.9,
      "/about-us": 0.8,
      "/contact-us": 0.8,
      "/case-studies": 0.8,
      "/blog": 0.8,
    };

    // Custom changefreq for specific routes
    const customChangefreq = {
      "/": "weekly",
      "/blog": "daily",
      "/services": "weekly",
      "/products": "weekly",
      "/academy": "weekly",
      "/case-studies": "weekly",
      "/privacy-policy": "yearly",
      "/terms-and-conditions": "yearly",
      "/cookie-policy": "yearly",
    };

    return {
      loc: path,
      changefreq: customChangefreq[path] || config.changefreq,
      priority: customPriorities[path] ?? config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
