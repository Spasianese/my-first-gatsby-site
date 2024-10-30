import * as React from 'react'
import Layout from '../components/layout'

const recipe = ({ pageContext }) => {
  const { article } = pageContext // Access 'recipe' from context
  return (
    <Layout pageTitle={article.title}>
    <div>
      <img src={article.mediaImage.mediaImage.url} alt={article.title}/>
      <br />
      By: {article.author.displayName}
      <br />
      <div dangerouslySetInnerHTML={{ __html: article.body.value}} />
    </div>
    </Layout>
  )
}

export default recipe