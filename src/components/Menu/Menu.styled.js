import styled from 'styled-components'

export const StyledMenu = styled.nav`
    height: 100vh;
    width: 100%;
    padding: 4.25rem 2rem;
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    text-align: left;
    background: ${({ theme }) => theme.primaryDark + 'E6'};
    transition: transform 0.3s ease-in-out;
    list-style-type: none;
    z-index: 5;
    transform: translateX(100%);
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
        transform: ${({ openMenu }) => openMenu ? 'translateX(0)': 'translateX(100%)'};
    }

    li {
        padding: 0.5rem 0;
        text-align: center;
    }

    a {
        font-size: 2rem;
        text-transform: uppercase;
        font-weight: bold;
        letter-spacing: 0.25rem;
        color: ${({ theme }) => theme.primaryAccent};
        text-decoration: none;
        transition: color 0.3s linear;
        cursor: pointer;
        
        @media (max-width: ${({ theme }) => theme.mobile}) {
            font-size: 1.5rem;
        }

        &:hover {
            color: ${({ theme }) => theme.primaryHover};
        }
    }

`