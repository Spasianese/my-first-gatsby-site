import React from "react"
import { render, screen } from "@testing-library/react"

// Data
const mockPageContext = {
  recipe: {
    ingredients: ["3 Eyes of Newt", "A Pound of Unicorn Horn", "20oz of Dragon's Blood"],
  }
};

// Ingredients Section component
const IngredientsSection = ({ pageContext }) => {
  const { ingredients } = pageContext.recipe;

  return (
    <div>
      <h3>Ingredients</h3>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
};

// Test
test("Displays the correct ingredients", () => {
  render(<IngredientsSection pageContext={mockPageContext} />);

  // Assertion: Check if each ingredient is rendered in the list
  mockPageContext.recipe.ingredients.forEach(ingredient => {
    expect(screen.getByText(ingredient)).toBeInTheDocument();
  });
});
