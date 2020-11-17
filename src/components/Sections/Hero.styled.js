import styled from 'styled-components';

const StyledHeroSection = styled.section`
    min-height: 100vh;
    width: 100%;
    padding: 5rem 6.25%;
    background: ${({theme}) => theme.primaryLight};

    h1 {
        padding: 2rem 0;
        margin: 0;
        font-size: clamp(2.5rem, 10vw, 4rem);
        font-weight: 600;
        color: ${({ theme }) => theme.secondaryAccent};
        opacity: ${({ animate }) => animate ? '1' : '0'};
        transform: translateX(${({ animate }) => animate ? '0' : '-100%'});
        transition: ${'transform 1.5s, opacity 2s ease-in-out'};
    }
    
    h3 {
        padding-top: 2rem;
        margin: 0;
        font-size: 16px;
        opacity: ${({ animate }) => animate ? '1' : '0'};
        transition: ${'opacity 1s ease-in-out'};
    }

    p {
        margin: 0;
        opacity: ${({ animate }) => animate ? '1' : '0'};
        transition: ${'opacity 2s ease-in-out'};
    }
`

export default StyledHeroSection;