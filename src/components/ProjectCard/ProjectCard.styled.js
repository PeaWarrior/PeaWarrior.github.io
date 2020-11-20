import styled from 'styled-components';

const StyledProjectCard = styled.div`
  padding: 1rem;
  margin-bottom: 2rem;
  width: 300px;
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid black;

  h5 {
    margin-top: 1rem;
    height: max-content;
    font-size: clamp(1.75rem, 2.5vw, 2rem);
    color: ${({ theme }) => theme.primaryAccent};
  }
  
  div {
    justify-content: flex-end;
    align-items: flex-end;
    
    p {
      margin: 0;
      height: max-content;
      font-size: 1rem;
      line-height: 1.25rem;
    }
  
    ul {
      padding: 0;
      width: 100%;
      height: 50px;
      display: flex;
      flex-wrap: wrap;
      list-style: none;
      /* border: 1px solid black; */
  
      li {
        padding: 0 0.2rem;
        height: max-content;
        font-size: 0.9rem;
        color: ${({ theme }) => theme.secondaryAccent};
      }
    }
    a {
      padding: 0 0.5rem;
      height: max-content;
      font-size: 1.5rem;
    }
  }
`

export default StyledProjectCard;