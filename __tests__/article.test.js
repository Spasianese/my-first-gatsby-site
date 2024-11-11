import React from "react"
import { render, screen } from "@testing-library/react"

// Data
const mockPageContext = {
    article: {
      title: "Top 10 Reasons why Wendell Should Give Me AN A TRIPLE PLUS",
      mediaImage: {
        mediaImage: {
          url: "https://example.com/happy-face.jpg",
        },
      },
      author: {
        displayName: "Unbiased Third Party",
      },
      body: {
        value: "<p>You know I deserve it</p>",
      },
    },
  };

// You have to write data-testid
const ArticleCorrect = ({pageContext}) => {
  const { article } = pageContext;

  return (
    <div>
        <img src={article.mediaImage.mediaImage.url} alt={article.title} data-testid="article-image"/>
        <br />
        <span data-testid="article-author">By: {article.author.displayName}</span>
        <br />
        <div dangerouslySetInnerHTML={{ __html: article.body.value}} data-testid="article-body"/>
    </div>
  );
};

//


// Test
test("Displays the correct Collection Information", () => {
    render(<ArticleCorrect pageContext={mockPageContext} />);
  
    // Assertions:
    // Check the title (in image alt text, as it's associated with the article)
    expect(screen.getByAltText("Top 10 Reasons why Wendell Should Give Me AN A TRIPLE PLUS")).toBeInTheDocument();
  
    // Check the author
    expect(screen.getByTestId("article-author")).toHaveTextContent("By: Unbiased Third Party");
  
    // Check the body content
    expect(screen.getByTestId("article-body")).toHaveTextContent("You know I deserve it");
  
    // Check the image src
    const img = screen.getByTestId("article-image");
    expect(img).toHaveAttribute("src", "https://example.com/happy-face.jpg");
  });