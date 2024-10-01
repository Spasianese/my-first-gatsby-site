import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { Link, graphql } from 'gatsby'

const recipePost = ({ data }) => {
    return (
    <Layout pageTitle="Yummy Yum Recipes">
      {
        data.Drupal.nodeRecipes.nodes.map((node, index) => (
          <article key={index}>
            <h2>
              <Link to={`/recipe/${node.title}`}>
                {node.title}
              </Link>
            </h2>
          </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
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

export const Head = () => <Seo title="Yummy Yum Recipes" />

export default recipePost