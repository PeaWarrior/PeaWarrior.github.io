/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
const path = require(`path`);

module.exports = {
  siteMetadata: {
    title: "Jackson Chen",
    description:
      "Jackson Chen is your friendly neighborhood software engineer based in Brooklyn, NY specialized in building full stack web applications and solving problems through technology.",
    siteUrl: "https://jacksonchen.dev", // No trailing slash allowed!
    image: "/landing.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@jacksonchen171",
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-anchor-links`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-robots-txt',
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `JacksonChen`,
        short_name: `JacksonChen`,
        description: `The application does cool things and makes your life better.`,
        lang: `en`,
        display: `standalone`,
        icon: `src/images/logo.png`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#fff`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-medium`,
      options: {
        username: `@jacksonchen171`,
      },
    },
  ],
}
