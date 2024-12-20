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
      nodeArticles(first: 10) {
      edges {
        node {
          title
          author {
            displayName
          }
          body {
            value
          }
          mediaImage {
            mediaImage {
              url
            }
          }
        }
      }
    }
      nodeRecipes(first: 10) {
        edges {
          node {
            title
            cookingTime
            preparationTime
            difficulty
            ingredients
            numberOfServings
            author {
              displayName
            }
            recipeInstruction {
              processed
            }
            summary {
              processed
            }
            mediaImage {
              mediaImage {
                url
              }
            }
          }
        }
      }
    }
    }
    `
  )

  // Create pages for each markdown file.
  const recipePostTemplate = path.resolve(`src/templates/recipePost.js`)
  result.data.Drupal.nodeRecipes.edges.forEach(({node}) => {
    createPage({
      path: `/recipe/${node.title}`,
      component: recipePostTemplate,
      context: {
        recipe: node,
      },
    });
  }
  )

  const articleTemplate = path.resolve(`src/templates/articlePost.js`)
  result.data.Drupal.nodeArticles.edges.forEach(({node}) => {
    createPage({
      path: `/article/${node.title}`,
      component: articleTemplate,
      context: {
        article: node,
      },
    });
  }
  )
}