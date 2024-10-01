import * as React from 'react'
import Layout from '../components/layout'

const recipe = ({ pageContext }) => {
  const { recipe } = pageContext // Access 'recipe' from context
  return (
    <Layout pageTitle="Yummy Yum Recipes">
    <div>
      Name: {recipe.title} {/* Display the recipe title */}
    </div>
    </Layout>
  )
}

export default recipe
