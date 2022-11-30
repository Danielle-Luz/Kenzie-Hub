import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
        margin: 0;
        padding: 0;
    }

    input {
        outline: none;
    }

    a {
        text-decoration: none;
    }

    button {
        border: none;
        text-align: center;
    }
`