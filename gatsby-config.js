module.exports = {
  siteMetadata: {
    title: "Faster Better Blog",
    description: "A growing collection of notes, ideas, and code to help build digital things better + faster.",
    twitter: 'theAndreyK',
    siteUrl: 'https://fasterbetter.dev'
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
    {
      resolve: `gatsby-plugin-theme-ui`,
      options: {
        prismPreset: `prism-okaidia`,
        preset: `@theme-ui/preset-funk`,
      }
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    `gatsby-remark-images`,
    'gatsby-plugin-mdx',
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200
            },
          },
        ],
      },
    }
  ],
  
};
