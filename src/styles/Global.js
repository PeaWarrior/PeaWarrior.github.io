import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    html, body {
        margin: 0;
        padding: 0;
    }

    *, *::after, *::before {
        box-sizing: border-box;
    }

    body {
        padding: 0;
        align-items: center;
        background: ${({ theme }) => theme.primaryLight};
        display: flex;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        height: 100%;
        width: 100%;
        justify-content: center;
        text-rendering: optimizeLegibility;
    }

    section {
        padding: 3rem 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`
