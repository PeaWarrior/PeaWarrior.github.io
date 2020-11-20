import React from 'react';

import StyledBlogCard from './BlogCard.styled';

const BlogCard = ({ name, title, createdAt, excerpt, uniqueSlug, tags }) => {
  const blogSite = 'https://medium.com/@jacksonchen171/';

  const renderTags = tags.map((tag, index) => {
    return (
      <li key={index}>{tag.name}</li>
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
      <a href={blogSite + uniqueSlug}>Continue reading...</a>
      <ul>
        <span>Tags:</span>
        {renderTags}
      </ul>
    </StyledBlogCard>
  )
};

export default BlogCard;