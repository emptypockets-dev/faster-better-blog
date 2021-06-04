import React from "react"
import Layout from "../components/Layout"
import Seo from '../components/Seo'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const IndexPage = ({data}) => {
  const posts = data.allMdx.nodes
  return (
    <main>
      <Layout>
        <Seo title="Digital Garden" />
       
        <h1><span>Welcome to my digital garden:</span> a growing collection of open notes, ideas, and code to help build digital things better + faster.</h1>
        <ul>
        {posts.map((post) => {
          const image = getImage(post.frontmatter.image)
          console.log(post.frontmatter);
          return(
            <li key={post.slug}>
              <Link to={post.slug} >
                <GatsbyImage 
                  className="thumbnail"
                  image={image} 
                  alt={post.frontmatter.imageAlt} />
                <h2>{post.frontmatter.title}</h2>
                <p>{post.frontmatter.description}</p>
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
          description
          image {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
        imageAlt
        }
      }
    }
  }
`

export default IndexPage

