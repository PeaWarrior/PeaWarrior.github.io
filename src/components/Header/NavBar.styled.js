import styled from 'styled-components';

const StyledNavBar = styled.header`
    position: fixed;
    width: 100%;
    padding: 0 6.25%;
    height: 4.25rem;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: ${({theme}) => theme.primaryDark} 1px solid;
    background: ${({theme}) => theme.primaryLight};
    z-index: 5;
`

export default StyledNavBar;