import * as React from 'react'
import { gridContainer, gridHeader, gridHeaderQuadItem, gridBodyInstructed, 
    gridBody, gridHeaderItem,gridHeaderQuad, gridHeaderTitle,
    gridBodyIngredients } from './stealingWebsite.module.css'

const StealingWebsite = ({
  mainImgURL,
  recipeTitle,
  recipeAuthor,
  recipeCookTime,
  recipePrep,
  recipeDiff,
  recipeServe,
  recipeIngredients,
  recipeSummary,
  recipeInstruction,
}) => {
  return (
    <div className={gridContainer}>

      <div className={gridHeader}>
        <div className={gridHeaderTitle}>
            <h2>{recipeTitle}</h2>
            <p>By: {recipeAuthor}</p>
            <div dangerouslySetInnerHTML={{ __html: recipeSummary }} />
        </div>
            <img src={mainImgURL} alt={recipeTitle} className={gridHeaderItem}/>
        <div className={gridHeaderQuad}>
            <div className="gridHeaderQuadItem">
                <img src="https://csc496f24demo.tldr.dev/core/profiles/demo_umami/themes/umami/images/svg/knife.svg" />
                Preparation Time: {recipePrep}
            </div>
            <div className="gridHeaderQuadItem">
            <img src="https://csc496f24demo.tldr.dev/core/profiles/demo_umami/themes/umami/images/svg/timer.svg" />
            Cooking Time: {recipeCookTime}
            </div>
            <div className="gridHeaderQuadItem">
            <img src="https://csc496f24demo.tldr.dev/core/profiles/demo_umami/themes/umami/images/svg/difficulty.svg" />
            Difficulty: {recipeDiff}
            </div>
            <div className="gridHeaderQuadItem">
            <img src="https://csc496f24demo.tldr.dev/core/profiles/demo_umami/themes/umami/images/svg/serves.svg" />
            Serves: {recipeServe}
            </div>
        </div>
      </div>
      <div className={gridBody}>
      
      <div className={gridBodyIngredients}>
      <h3>Ingredients</h3>
      <ul>
        {recipeIngredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      </div>

      <div className={gridBodyInstructed}>
        <h2>Instructions:</h2>
        <hr />
        <div dangerouslySetInnerHTML={{ __html: recipeInstruction }} />
        </div>
      </div>
    </div>
  )
}

export default StealingWebsite
