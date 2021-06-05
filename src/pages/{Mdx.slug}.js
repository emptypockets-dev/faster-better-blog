import React from 'react';
import {graphql} from 'gatsby';
import {MDXRenderer} from 'gatsby-plugin-mdx';
import Layout from '../components/Layout';
import {getSrc} from 'gatsby-plugin-image';
import Seo from '../components/Seo';
import styled from 'styled-components';
import Tags from '../components/Tags';

const Container = styled.div`
  article {
    width: 100%;
    max-width: 1300px;
    margin: 100px auto;
    > .gatsby-image-wrapper {
      max-width: 600px;
      margin: 0 auto 40px auto;
    }
  }
  h1,
  h2,
  h3,
  p,
  ul,
  ol {
    max-width: 600px;
    margin: 0 auto 0 auto;
  }
  pre {
    max-width: 700px;
    margin: 0 auto 0 auto;
  }
  p {
    margin-bottom: 20px;
    padding: 0;
    font-size: 20px;
    line-height: 1.5;
  }
  h1 {
    font-size: 50px;
    color: #000;
    margin: 0px auto 40px auto;
  }
  h2,
  h3 {
    margin: 0 auto 20px auto;
    font-size: 24px;
    padding: 0;
  }
  h3 {
    font-size: 20px;
  }
  ol {
    margin-bottom: 40px;
  }
  img {
    margin: 20px 0;
  }
`;

const BlogPostPage = ({data}) => {
  const post = data.mdx;
  const seoImage = getSrc(post.frontmatter.image);
  const tags = post.frontmatter.tags;
  // console.log(tags);
  return (
    <Layout>
      <Container>
        <article>
          <Seo
            title={post.frontmatter.title}
            description={post.frontmatter.description}
            image={seoImage}
            imageAlt={post.frontmatter.imageAlt}
          />
          {/* <GatsbyImage image={image} alt={post.frontmatter.imageAlt} /> */}
          {tags && <Tags tags={tags} />}
          <h1>{post.frontmatter.title}</h1>
          <MDXRenderer>{post.body}</MDXRenderer>
        </article>
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query BlogPostById($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        imageAlt
        tags
      }
      body
    }
  }
`;

export default BlogPostPage;
