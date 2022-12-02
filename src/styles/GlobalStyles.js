import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
        margin: 0;
        padding: 0;
    }

    :root {
        --toastify-color-success: ${({theme}) => theme.colors.status.sucess};
        --toastify-color-error: ${({theme}) => theme.colors.status.negative};
    }

    body {
        background-color: ${({theme}) => theme.colors.greyScale[4]};
    }

    input, select {
        outline: none;
    }

    a {
        text-decoration: none;
    }
    
    button {
        border: none;
        text-align: center;
    }
    
    a, button {
        text-align: center;
        transition: 0.3s;
    }
    
    button, select {
        cursor: pointer;
    }

    #root {
        align-items: center;
        display: flex;
        justify-content: center;

        min-height: max-content;
        width: 100%;
    }
`