import styled from 'styled-components';
import Img from 'gatsby-image';

export const StyledImage = styled(Img)`
    width: 100vw;
    height: 100vh;
    z-index: -1;
`;

const StyledHeroSection = styled.section`
    position: absolute;
    top: 0;
    left: 0;
    min-height: 100vh;
    padding: 0 6.25%;
    background: linear-gradient(0deg, ${({ theme }) => theme.primaryDark}99, ${({ theme }) => theme.primaryDark}99);
    width: 100vw;
    
    /* background-size: 100vw 100vh; */

    h1 {
        margin: 0.5rem 0 0 0;
        font-size: clamp(2.8rem, 10vw, 5rem);
        font-weight: 700;
        color: ${({ theme }) => theme.primaryLight};
        opacity: ${({ animate }) => animate ? '1' : '0'};
        transform: translateX(${({ animate }) => animate ? '0' : '-100%'});
        transition: ${'transform 1.5s, opacity 2s ease-in-out'};
    }

    h2 {
        margin: 1rem 0;
        font-size: clamp(1.5rem, 3vw, 3rem);
        color: ${({ theme }) => theme.primaryAccent};
        opacity: ${({ animate }) => animate ? '1' : '0'};
        transform: translateY(${({ animate }) => animate ? '0' : '100%'});
        transition: ${'transform 1.5s, opacity 2s ease-in-out'};
    }
    
    h3 {
        margin: 1rem 0;
        font-size: clamp(1rem, 2.5vw, 1.5rem);
        color: ${({ theme }) => theme.secondaryDark};
        opacity: ${({ animate }) => animate ? '1' : '0'};
        transition: ${'opacity 1s ease-in-out'};
    }

    p {
        margin-bottom: 5rem;
        font-size: clamp(1rem, 3vw, 1.75rem);
        color: ${({ theme }) => theme.secondaryDark};
        opacity: ${({ animate }) => animate ? '1' : '0'};
        transition: ${'opacity 2s ease-in-out'};
    }

    a {
        padding: 1rem;
        font-size: clamp(1rem, 3vw, 1.5rem);
        color: ${({ theme }) => theme.secondaryAccent};
        text-decoration: none;
        border: 2px solid ${({ theme }) => theme.secondaryAccent};
        border-radius: 5px;
        opacity: ${({ animate }) => animate ? '1' : '0'};
        transition: ${'opacity 2s ease-in-out'};
    }

    a:hover {
        color: ${({ theme }) => theme.secondaryAccent};
        background: ${({ theme }) => theme.secondaryAccent}80;
        border: 2px solid ${({ theme }) => theme.secondaryAccent};
    }
`

export default StyledHeroSection;