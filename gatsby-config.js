require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

/**
 * @type {import('gatsby').GatsbyConfig}
 */

module.exports = {
  siteMetadata: {
    title: `NbRecipes`,
    description: `Recipe Site, created using Gatsby / React, Contentful. `,
    author: `@nbojan`,
    url: `https://nbrecipes-gatsby.netlify.app`,
    image: `/main.png`,
    twitterUsername: `@Trojka33`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `i0zdjzmfldis`,
        accessToken: process.env.CONTENTFUL_KEY
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Quicksand\:300,400,500,600,700`,
          `Roboto Condensed\:400,700`,
          `Montserrat\:300,400,500,600`
        ],
        display: 'swap'
      }
    }
  ],
}
