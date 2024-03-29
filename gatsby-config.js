module.exports = {
  siteMetadata: {
    title: `Michal Begej - Senior software developer`,
    siteUrl: `https://begej.tech`,
    description: `Senior software developer with C#/ .NET experience, located in Poland`,
    keywords: `.net, developer, software developlment`,
    author: `Michal Begej`
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
    }, 
    "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    }, "gatsby-plugin-postcss", "gatsby-plugin-fontawesome-css"]
};