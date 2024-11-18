import * as React from 'react'
import Layout from '../components/layout'
import StealingWebsite from '../components/stealingWebsite'

const Recipe = ({ pageContext }) => {
  const { recipe } = pageContext // Access 'recipe' from context

  // Render Layout and StealingWebsite as separate elements without nesting
  return (
    <>
      <Layout />
      <StealingWebsite
        mainImgURL={recipe.mediaImage.mediaImage.url}
        recipeTitle={recipe.title}
        recipeAuthor={recipe.author.displayName}
        recipeCookTime={recipe.cookingTime}
        recipePrep={recipe.preparationTime}
        recipeDiff={recipe.difficulty}
        recipeServe={recipe.numberOfServings}
        recipeIngredients={recipe.ingredients}
        recipeSummary={recipe.summary.processed}
        recipeInstruction={recipe.recipeInstruction.processed}
      />
    </>
  )
}

export default Recipe
