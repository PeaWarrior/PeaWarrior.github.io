import styled from 'styled-components';

const StyledBlogCard = styled.div`
  padding: 1.15rem;
  margin-bottom: 2rem;
  width: 300px;
  height: 450px;
  border: 1px solid ${({ theme }) => theme.secondaryDark };
  border-radius: 10px;

  .blog-head {
    height: max-content;

    h5 {
      margin: 0;
      padding-bottom: 0.5rem;
      height: 3.25rem;
      text-align: center;
      font-size: 1.25rem;
      border-bottom: 1px solid ${({ theme }) => theme.secondaryAccent };
      color: ${({ theme }) => theme.primaryAccent};
    }

    h6 {
      margin: 0;
    }

    .blog-meta {
      margin-top: 0.5rem;
      width: 100%;
      justify-content: space-between;
      text-align: end;
      font-size: 0.75rem;
      color: ${({ theme }) => theme.secondaryDark};
    }
  }

  p {
    margin: 0;
    max-width: 100%;
    height: 10.5rem;
    display: -webkit-box;
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 7;
    -webkit-box-orient: vertical;
  }
  a {
    width: 100%;
    text-align: end;
    color: ${({ theme }) => theme.primaryAccent};
    
    &:hover {
      color: ${({ theme }) => theme.secondaryAccent};
    }
  }

  ul {
    margin: 0;
    padding: 0;
    height: max-content;
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    span {
      padding: 0.25rem 0;
    }
    li {
      margin: 0.15rem;
      padding: 0.25rem;
      font-size: 0.6rem;
      color: ${({ theme }) => theme.secondaryAccent};
      background: ${({ theme }) => theme.primaryDark};
      border: 1px solid black;
      border-radius: 5px;
    }
  }

`;

export default StyledBlogCard;