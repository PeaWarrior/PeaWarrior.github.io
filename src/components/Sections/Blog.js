import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import StyledBlogSection from './Blog.styled';

const Blog = () => {
  const data = useStaticQuery(graphql`
    {
      allMediumPost {
        edges {
          node {
            author {
              name
            }
            previewContent2 {
              bodyModel {
                paragraphs {
                  text
                }
              }
            }
          }
        }
      }
    }
  `);

  const { allMediumPost: {edges: blogs} } = data;

  const renderBlogs = blogs.map(blog => {
    const { node: { author: { name }, previewContent2: { bodyModel: { paragraphs } } } } = blog;


    const title = paragraphs[0].text;
    const subtitle = paragraphs[1].text;
    const excerpt = paragraphs[3].text;
    return (
      <div></div>
    )
  });

  console.log(renderBlogs);

  return (
  <StyledBlogSection id='blog'>
    <h4>BLOG</h4>
  </StyledBlogSection>
  )
}

export default Blog
