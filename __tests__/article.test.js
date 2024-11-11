import React from "react"
import { render } from "@testing-library/react"
import article from "./article"

// Mock data resembling the `pageContext` structure
const mockPageContext = {
  article: {
    title: "Amazing Article",
    mediaImage: {
      mediaImage: { url: "/images/amazing-article.jpg" }
    },
    author: {
      displayName: "John Doe"
    },
    body: {
      value: "<p>This is the article content. It's quite interesting!</p>"
    }
  }
}

test("Displays the correct article content", () => {
  const { getByText, getByAltText } = render(<article pageContext={mockPageContext} />)

  // Check that the title is rendered correctly
  expect(getByText("Amazing Article")).toBeInTheDocument()

  // Check that the author is rendered correctly
  expect(getByText("By: John Doe")).toBeInTheDocument()

  // Check that the image is rendered with the correct alt text
  const image = getByAltText("Amazing Article")
  expect(image).toBeInTheDocument()
  expect(image.getAttribute("src")).toBe("/images/amazing-article.jpg")

  // Check that the article body is rendered correctly
  expect(getByText("This is the article content. It's quite interesting!")).toBeInTheDocument()
})
