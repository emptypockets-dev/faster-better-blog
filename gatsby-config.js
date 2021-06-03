module.exports = {
  siteMetadata: {
    title: "Faster Better Blog",
    description: "My digital garden",
    twitter: 'theAndreyK'
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-mdx`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/posts`,
        name: `posts`
      }
    },
    'gatsby-plugin-mdx',
    {
      resolve: `gatsby-plugin-theme-ui`,
      options: {
        prismPreset: `prism-okaidia`,
        preset: `@theme-ui/preset-funk`,
      }
    }
  ],
};
