import React from "react"
import Layout from "../components/Layout"
import Seo from '../components/Seo'
import { graphql, Link } from 'gatsby'

// markup
const IndexPage = ({data}) => {
  const posts = data.allMdx.nodes
  return (
    <main>
      <Layout>
        <Seo title="Home" />
        <h1>Faster<span>Better</span></h1>
        <p>A place to share code with internet friends</p>
        <ul>
        {posts.map((post) => {
          return(
            <li>
              <Link to={post.slug} key={post.slug}>
                <p>{post.frontmatter.title}</p>
              </Link>
            </li>
          )
        })}
        </ul>
      </Layout>
    </main>
  )
}

export const pageQuery = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___title], order: ASC }) {
      nodes {
        slug 
        frontmatter {
          title
        }
      }
    }
  }
`

export default IndexPage

