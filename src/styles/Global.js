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

        min-height: 100vh;
        padding: 4.25rem 6.25%;
        display: flex;
        align-items: center;

        div {
            width: 100%;
        }

        h2 {
            margin: 2.5rem 0;
            width: 100%;
            color: ${({ theme }) => theme.primaryAccent};
            font-size: 3rem;
            text-align: center;
            overflow: hidden;

            &:before {
                content:"";
                display: inline-block;
                height: 0.5em;
                vertical-align: bottom;
                width: 100%;
                margin-right: 5px;
                margin-left: -100%;
                border-top: 2px solid ${({ theme }) => theme.secondaryAccent};
            }

            &:after {
                content:"";
                display: inline-block;
                height: 0.5em;
                vertical-align: bottom;
                width: 100%;
                margin-right: -100%;
                margin-left: 5px;
                border-top: 2px solid ${({ theme }) => theme.secondaryAccent};
            }
        }
    }
`
