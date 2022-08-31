/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: "One For The Code",
    description: "A super-fast site using GatsbyJS",
    author: "Morgan Baker",
    twitterUsername: "jihweiliang",
    facebookUsername: "leviliangtw",
    instagramUsername: "jihweiliang",
    linkedinUsername: "jihweiliang",
    image: "/hallstatt-night.jpg",
    icon: "/icons8-code-16.png",
    siteUrl: "https://oftc.netlify.com",
    developerName: "leviliangtw",
    developerUrl: "https://github.com/leviliangtw",
    // developerName: "Morgan Baker Development",
    // developerUrl: "https://www.morganbaker.dev",
  },
  /* Your site config here */
  plugins: [
    `gatsby-plugin-netlify`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        // host: `preview.contentful.com`,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://oftc.netlify.com",
        sitemap: "https://oftc.netlify.com/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
  ],
}
