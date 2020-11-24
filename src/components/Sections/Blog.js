import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import StyledBlogSection from './Blog.styled';
import BlogCard from '../BlogCard/BlogCard';

const Blog = () => {
  const data = useStaticQuery(graphql`
    {
      allMediumPost(sort: {fields: createdAt, order: DESC}) {
        edges {
          node {
            author {
              name
            }
            createdAt(formatString: "MMMM DD, YYYY")
            previewContent2 {
              bodyModel {
                paragraphs {
                  text
                }
              }
            }
            uniqueSlug
            virtuals {
              tags {
                name
              }
            }
          }
        }
      }
    }
  `);

  const { allMediumPost: {edges: blogs} } = data;

  const renderBlogs = blogs.map(blog => {
    const { node: { author: { name }, createdAt, previewContent2: { bodyModel: { paragraphs } }, uniqueSlug, virtuals: {tags} } } = blog;


    const title = paragraphs[0].text;
    const excerpt = paragraphs[3].text;
    const props = {name, title, createdAt, excerpt, uniqueSlug, tags};
    return (
      <BlogCard key={title} {...props} />
    )
  });

  return (
  <StyledBlogSection id='blog'>
    <h2>BLOG</h2>
    <div>
      {renderBlogs}
    </div>
  </StyledBlogSection>
  )
}

export default Blog
