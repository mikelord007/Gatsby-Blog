module.exports = {
  siteMetadata: {
    title: `Gatsby blog`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-sass", "gatsby-plugin-mdx", 'gatsby-plugin-postcss',{
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": `${__dirname}/blogs`
    },
    __key: "pages"
  }]
};