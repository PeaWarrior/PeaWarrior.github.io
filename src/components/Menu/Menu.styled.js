import styled from 'styled-components'

export const StyledMenu = styled.nav`
    display: flex;
    list-style-type: none;
    z-index: 5;
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
        height: 100vh;
        width: 100%;
        padding: 4.25rem 5rem;
        position: fixed;
        top: 0;
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

        @media (max-width: ${({ theme }) => theme.mobile}) {
            padding: 0.5rem;
        }
    }
    
    a {
        font-size: 1.5rem;
        text-transform: uppercase;
        font-weight: bold;
        color: ${({ theme }) => theme.primaryAccent};
        text-decoration: none;
        transition: color 0.3s linear;
        cursor: pointer;
        
        @media (max-width: ${({ theme }) => theme.mobile}) {
            letter-spacing: 0.5rem;
        }
        
        @media (min-width: ${({ theme }) => theme.mobile}) {
            /* letter-spacing: 1px; */
        }

        &:hover {
            color: ${({ theme }) => theme.secondaryAccent};
        }
    }

`