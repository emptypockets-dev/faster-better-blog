import React from "react"
import Layout from "../components/Layout"

// markup
const IndexPage = () => {
  return (
    <main>
      <Layout>
        <h1>Digital Garden</h1>
        <p>Squeezing my mind grapes into code.</p>
        <ul>
          <li>
            <p>
              Hubspot local development with Webpack
            </p>
          </li>
          <li>
            <p>
              Helpful resources to code all the Javascript
            </p>
          </li>
        </ul>
      </Layout>
    </main>
  )
}

export default IndexPage

