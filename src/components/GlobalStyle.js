import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        background-color: ${({theme}) => theme.colors.white};
        
        font-family: ${({ theme }) => theme.fonts.main};
        font-weight: ${({ theme }) => theme.fontWeights.normal};
        font-style: normal;
        font-size: ${({ theme }) => theme.fontSizes.s};
        line-height: ${({ theme }) => theme.lineHeight}
    }

    h1, h2, h3, h4, h5, h6, p {
        margin: 0;
    }

    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    button {
        border: none;
        cursor: pointer;
    }
`;
