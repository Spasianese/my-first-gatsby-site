import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Card from '../components/card'
import { Link, graphql } from 'gatsby'

const articlePost = ({ data }) => {
    return (
      <>
      <Layout pageTitle="Yippee Fun Readings!" />
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {
            data.Drupal.nodeArticles.nodes.map((node, index) => (
              <Card 
                key={node.id}
                mainImgURL={node.mediaImage.mediaImage.url}
                Title={node.title}
                link={`/article/${node.title}`}
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
    nodeArticles(first: 10) {
      nodes {
      mediaImage {
            mediaImage {
              url
            }
          }
        author {
          displayName
        }
        title
      }
    }
  }
    }
`

export const Head = () => <Seo title="Articlessss" />

export default articlePost