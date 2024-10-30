import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { Link, graphql } from 'gatsby'

const articlePost = ({ data }) => {
    return (
    <Layout pageTitle="Yippee Fun Readings">
      {
        data.Drupal.nodeArticles.nodes.map((node, index) => (
          <article key={index}>
            <h2>
              <Link to={`/article/${node.title}`}>
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
    nodeArticles(first: 10) {
      nodes {
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