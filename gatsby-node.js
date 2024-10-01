const path = require("path")

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Query for markdown nodes to use in creating pages.
  const result = await graphql(
    `
    query {
            Drupal {
            nodeRecipes(first: 10) {
                nodes {
                title
                id
            }
            }
        }
    }
    `
  )

  // Create pages for each markdown file.
  const recipePostTemplate = path.resolve(`src/templates/recipePost.js`)
  result.data.Drupal.nodeRecipes.nodes.forEach( node => {
    createPage({
      path: `/recipe/${node.title}`,
      component: recipePostTemplate,
      // In your blog post template's graphql query, you can use pagePath
      // as a GraphQL variable to query for data from the markdown file.
      context: {
        recipe: node,
      },
    })
  })
}