/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: "Jackson Chen",
    description:
      "Jackson Chen is your friendly neighborhood software engineer based in Brooklyn, NY specialized in building full stack web applications and solving problems through technology.",
    url: "https://jacksonchen.dev", // No trailing slash allowed!
    image: "/landing.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@jacksonchen171",
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-anchor-links`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
