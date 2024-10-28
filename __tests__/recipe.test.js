import React from "react"
import { render } from "@testing-library/react"

// Sample data resembling the `pageContext` structure
const mockPageContext = {
  recipe: {
    title: "Chocolate Cake",
    mediaImage: {
      mediaImage: { url: "/images/chocolate-cake.jpg" }
    },
    author: {
      displayName: "Chef Baker"
    },
    summary: {
      processed: "<p>This is a delicious chocolate cake.</p>"
    },
    cookingTime: "30 minutes",
    preparationTime: "15 minutes",
    difficulty: "Easy",
    numberOfServings: 8,
    ingredients: ["1 cup flour", "1 cup sugar", "2 eggs", "1/2 cup cocoa powder"],
    recipeInstruction: {
      processed: "<p>Mix ingredients and bake.</p>"
    }
  }
}

test("Displays the correct list of ingredients", () => {
  // Render the component with mock data for `pageContext`
  const { getByText } = render(<recipe pageContext={mockPageContext} />)

  // Verify that each ingredient is rendered correctly
  mockPageContext.recipe.ingredients.forEach(ingredient => {
    expect(getByText(ingredient)).toBeInTheDocument()
  })
})
