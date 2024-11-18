import * as React from 'react'
import Layout from '../components/layout'
import ArticleComponents from '../components/articleComponents'

const Article = ({ pageContext }) => {
  const { article } = pageContext // Access 'recipe' from context
  return (
    <>
    <Layout />
    <ArticleComponents 
      mainImgURL={article.mediaImage.mediaImage.url}
      articleTitle={article.title}
      articleAuthor={article.author.displayName}
      articleBody={article.body.value}
    />
    </>
  )
}

export default Article