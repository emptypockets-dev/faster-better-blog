import React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import {graphql, Link} from 'gatsby';
import TagsThumbnail from '../components/TagsThumbnail';

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
        <h2>
          Featuring:&nbsp;
          <span class="hubspot">hubspot</span>
          <span class="procreate">procreate</span>
          <span class="react">react</span>
          <span class="gatsby">gatsby</span>
          <span class="html">html</span>
          <span class="scss">scss</span>
          <span class="webpack">webpack</span>
          <span class="babel">babel</span>
          <span class="javascript">javascript</span>
          <span class="random">testing</span>
        </h2>
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
                  <TagsThumbnail tags={tags} size="small" />
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
