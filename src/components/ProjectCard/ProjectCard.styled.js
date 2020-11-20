import styled from 'styled-components';
import Img from 'gatsby-image';

export const StyledImage = styled(Img)`
  margin-top: 5rem;
  `

const StyledProjectCard = styled.div`
  padding: 0.5rem;
  margin-bottom: 2rem;
  width: 300px;
  height: 450px;
  position: relative;
  border: 1px solid ${({ theme }) => theme.secondaryDark};
  border-radius: 10px;
  
  .content {
    padding: 1rem;
    height: 100%;
    position: absolute;
    flex-direction: column;
    justify-content: space-between;

    h5 {
      margin-top: 0;
      text-align: center;
      font-size: 2.25rem;
      color: ${({ theme }) => theme.primaryAccent};
      border-bottom: 1px solid ${({ theme }) => theme.secondaryAccent};
    }

    .card-body {
      p {
        margin: 0.5rem 0;
        width: 100%;
        color: ${({ theme }) => theme.primaryAccent};
      }

      ul {
        padding: 0;
        margin-top: 1rem;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        list-style: none;

        li {
          padding-right: 0.4rem;
          height: max-content;
          font-size: 1rem;
          color: ${({ theme }) => theme.secondaryDark};
        }
      }

      .links {
        justify-content: flex-end;
        a {
          padding: 0 0.75rem;
          height: max-content;
          font-size: 1.75rem;
          color: ${({ theme }) => theme.primaryAccent};
        }
        
        a:hover {
          color: ${({ theme }) => theme.secondaryAccent};
        }
      }
    }
  }

  
`

export default StyledProjectCard;