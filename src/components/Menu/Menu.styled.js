import styled from 'styled-components'

export const StyledMenu = styled.nav`
    height: 100vh;
    padding: 2rem;
    position: fixed;
    top: 4.25rem;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    background: ${({ theme }) => theme.primaryLight};
    transition: transform 0.3s ease-in-out;
    list-style-type: none;
    z-index: 5;
    transform: ${({ open }) => open ? 'translateX(0)': 'translateX(100%)'};
    width: 100%;
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
        transform: ${({ open }) => open ? 'translateX(0)': 'translateX(100%)'};
    }

    li {
        padding: 0.5rem 0;
    }

    a {
        font-size: 2rem;
        text-transform: uppercase;
        font-weight: bold;
        letter-spacing: 0.5rem;
        color: ${({ theme }) => theme.primaryDark};
        text-decoration: none;
        transition: color 0.3s linear;
        cursor: pointer;
        
        @media (max-width: ${({ theme }) => theme.mobile}) {
            font-size: 1.5rem;
            text-align: center;
        }

        &:hover {
            color: ${({ theme }) => theme.primaryHover};
        }
    }
`