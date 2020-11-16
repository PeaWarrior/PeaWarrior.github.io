import styled from 'styled-components';

const StyledHeroSection = styled.section`
    min-height: 100vh;
    padding: 5rem 6.25%;
    background: ${({theme}) => theme.primaryLight};

    h1 {
        margin: 0;
        font-size: 40px;
        font-weight: 700;
        opacity: ${({ animate }) => animate ? '1' : '0'};
        transform: translateX(${({ animate }) => animate ? '0' : '-100%'});
        transition: ${'transform 1.5s, opacity 2s ease-in-out'};
    }
    
    h3 {
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