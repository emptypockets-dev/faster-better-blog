import React from "react"
import Layout from "../components/Layout"
import Seo from '../components/Seo'
import { graphql, Link } from 'gatsby'
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"

const IndexPage = ({data}) => {
  const posts = data.allMdx.nodes
  return (
    <main>
      <Layout>
        <Seo title="Home" />
        <StaticImage 
          imgClassName="logo"
          src="../images/ak-logo.png"
          alt="Logo - Andrey Kondratyuk"
          width={200}
          height={150}
        />
        <h1>Hi, this is where I squeeze my mind grapes into code juice.</h1>
        <ul>
        {posts.map((post) => {
          const image = getImage(post.frontmatter.image)
          return(
            <li>
              <Link to={post.slug} key={post.slug}>
                <GatsbyImage 
                  className="thumbnail"
                  image={image} 
                  alt={post.frontmatter.imageAlt} />
                <h2>{post.frontmatter.title}</h2>
                
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

