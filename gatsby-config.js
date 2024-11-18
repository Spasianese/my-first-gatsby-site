/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: "What?",
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    {
      resolve: "gatsby-source-tmdb",
      options: {
        apiKey: process.env.API_KEY,
        sessionID: process.env.SESSION_ID,
        endpoints: [
          // Query the /discover/movie endpoint for 50 movies that were released in 2021
          // Sort it by popularity and name it "Top2021Movies"
          {
            url: `discover/movie`,
            searchParams: {
              language: `en-US`,
              sort_by: `popularity.desc`,
              year: `2023`,
            },
            typeName: `Top2023Movies`,
            countLimit: 50,
          }]
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-graphql",
      options: {
        // This type will contain remote schema Query type
        typeName: "DrupalGraqhQL",
        // This is field under which it's accessible
        fieldName: "Drupal",
        // Url to query from
        // url: "http://kecatalog.dev.wwbtc.com/graphql",
        //  url: `http://10.89.0.11/graphql`,
        // url: `https://api.keeneland.com/graphql`,
        // url: "http://10.89.0.24/graphql",
        url: `https://csc496f24demo.tldr.dev/graphql`,
      },
    },
  ],
}
