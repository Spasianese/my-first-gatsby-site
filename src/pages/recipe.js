import * as React from 'react'
import Layout from '../components/layout'
import Card from '../components/card'
import Seo from '../components/seo'
import { graphql } from 'gatsby'

const recipePost = ({ data }) => {
    return (
    <>
    <Layout pageTitle="Yummy Yum Recipes" />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {
          data.Drupal.nodeRecipes.nodes.map((node, index) => (
            <Card 
              key={node.id}
              mainImgURL={node.mediaImage.mediaImage.url}
              Title={node.title}
              link={`/recipe/${node.title}`}
            />
          ))
        }
      </div>
    </>
  )
}

export const query = graphql`
  query {
    Drupal {
      nodeRecipes(first: 10) {
        nodes {
          mediaImage {
            mediaImage {
              url
            }
          }
          title
          id
        }
      }
    }
  }
`

export const Head = () => <Seo title="Yummy Yum Recipes" />

export default recipePost
