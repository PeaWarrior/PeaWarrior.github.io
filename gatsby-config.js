/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Jackson Chen",
    description: "Jackson Chen is a software engineer specialized in building full stack web applications.",
    url: "https://jacksonchen.dev", // No trailing slash allowed!
    image: "/me.png", // Path to your image you placed in the 'static' folder
    twitterUsername: "@jacksonchen171",
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-anchor-links`,
    `gatsby-plugin-react-helmet`,
  ],
}
