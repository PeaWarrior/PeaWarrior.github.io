import styled from 'styled-components'

export const StyledMenu = styled.ul`
    display: flex;
    list-style-type: none;
    z-index: 5;
    
    @media (max-width: ${({ theme }) => theme.device.medium}) {
        margin: 0;
        padding: 4.25rem 5rem;
        height: 100vh;
        width: 100%;
        top: 0;
        position: fixed;
        right: -100%;
        flex-direction: column;
        text-align: left;
        justify-content: center;
        background: ${({ theme }) => theme.primaryDark + 'E6'};
        transition: transform 0.3s ease-in-out;
        transform: ${({ open }) => open ? 'translateX(-100%)': 'translateX(0)'};
    }

    
    
    li {
        padding: 0.5rem;
        text-align: center;
    }
    
    a {
        font-size: clamp(1.1rem, 1.75vw, 1.4rem);
        text-transform: uppercase;
        font-weight: bold;
        color: ${({ theme }) => theme.primaryAccent};
        text-decoration: none;
        transition: ${'color 0.3s linear'};
        cursor: pointer;
        
        &:hover {
            color: ${({ theme }) => theme.secondaryAccent};
            /* border-bottom: ${({ theme }) => theme.secondaryAccent} 1.5px solid; */
        }
    }

`