import React from 'react';
import { Link } from 'gatsby';

import StyledBlogCard from './BlogCard.styled';

const BlogCard = ({ name, title, createdAt, excerpt, uniqueSlug, tags }) => {
  const blogSite = 'https://medium.com/@jacksonchen171/';

  const renderTags = tags.map(tag => {
    return (
      <li>{tag.name}</li>
    )
  })

  return (
    <StyledBlogCard>
      <div className='blog-head'>
        <h5>{title}</h5>
        <div className='blog-meta'>
          <span>by <b>{name}</b></span>
          <span>{createdAt}</span>
        </div>
      </div>
      <p>{excerpt}</p>
      <Link to={blogSite + uniqueSlug}>Continue reading...</Link>
      <div className='blog-content'>
        <ul>
          <span>Tags:</span>
          {renderTags}
        </ul>
      </div>
    </StyledBlogCard>
  )
};

export default BlogCard;