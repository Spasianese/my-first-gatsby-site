// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
    <p>Hi there! I'm not a proud creator of this site, which I built using 
      Gatsby's pisspoor YouTube tutorials. I wish they'd known how to film
      tutorials and just do seperate livestreams. Using a livestream for both
      is stupid, you should've observed and taken in what people needed in chat
      and film a tutorial using what you clearly see beginners struggle with</p>
  </Layout>
  )
}

export const Head = () => <Seo title="About Junji Ito" />

// Step 3: Export your component
export default AboutPage