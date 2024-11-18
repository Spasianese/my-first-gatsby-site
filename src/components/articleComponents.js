import * as React from 'react'
import {articleContainer, articleTitleCSS, articleAuthorCSS, articleMainImage, articleBodyCSS} from './articleComponents.module.css';

const ArticleComponents = ({
  mainImgURL,
  articleTitle,
  articleAuthor,
  articleBody,
}) => {
  return (
    <div className={articleContainer}>
  <h2 className={articleTitleCSS}>{articleTitle}</h2>
  <img className={articleMainImage} src={mainImgURL} alt={articleTitle}/>
  <br />
  <div className={articleAuthorCSS}>By: {articleAuthor}</div>
  <div className={articleBodyCSS} dangerouslySetInnerHTML={{ __html: articleBody}} />
</div>
  )
}

export default ArticleComponents
