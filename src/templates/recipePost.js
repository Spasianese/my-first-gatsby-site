import * as React from 'react'
import Layout from '../components/layout'

const recipe = ({ pageContext }) => {
  const { recipe } = pageContext // Access 'recipe' from context
  return (
    <Layout pageTitle={recipe.title}>
    <div>
      <img src={recipe.mediaImage.mediaImage.url} alt={recipe.title}/>
      <br />
      By: {recipe.author.displayName}
      <br />
      <div dangerouslySetInnerHTML={{ __html: recipe.summary.processed }} />
      <p>Cooking Time: {recipe.cookingTime} | Preparation Time: {recipe.preparationTime} | Difficulty: {recipe.difficulty} | Serves: {recipe.numberOfServings}</p>
      <h3>Ingredients</h3> 
      <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      <h2>Instructions:</h2>
      <div dangerouslySetInnerHTML={{ __html: recipe.recipeInstruction.processed }} />
    </div>
    </Layout>
  )
}

export default recipe