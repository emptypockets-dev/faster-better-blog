import React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import {graphql, Link} from 'gatsby';
import Tags from '../components/Tags';

const IndexPage = ({data}) => {
  const posts = data.allMdx.nodes;
  return (
    <main>
      <Layout>
        <Seo title="Digital Garden" />

        <h1>
          <span>Digital Garden:</span> a growing collection of open notes,
          ideas, and code to help build things faster + better.
        </h1>
        <ul>
          {posts.map((post) => {
            const tags = post.frontmatter.tags;
            // console.log(tags);
            return (
              <li key={post.slug}>
                <Link to={post.slug}>
                  {/* <GatsbyImage 
                  className="thumbnail"
                  image={image} 
                  alt={post.frontmatter.imageAlt} /> */}
                  <Tags tags={tags} />
                  <h2>{post.frontmatter.title}</h2>
                  <p>{post.frontmatter.description}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </Layout>
    </main>
  );
};

export const pageQuery = graphql`
  query {
    allMdx(sort: {fields: [frontmatter___title], order: ASC}) {
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
          tags
        }
      }
    }
  }
`;

export default IndexPage;
