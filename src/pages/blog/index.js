import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import Card from '../../components/card'
import { Link, graphql } from 'gatsby'

const BlogPage = ({ data }) => {
    return (
    <>
    <Layout pageTitle="My Blog Posts" />
      {
        data.allMdx.nodes.map((node) => (
            <Card 
              key={node.id}
              mainImgURL={node.frontmatter.hero_image.publicURL}
              Title={node.frontmatter.title}
              link={`/blog/${node.frontmatter.slug}`}
            />
        ))
      }
    </>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {frontmatter: {date: DESC}}) {
    nodes {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        title
        slug
        hero_image {
          publicURL
        }
      }
      id
      excerpt
    }
  }
  }
`

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage