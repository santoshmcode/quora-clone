import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    
        
    *, *::before, *::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;

        
    }

    body{
        overflow-x: hidden;
    }

    p{
        cursor: default;
    }
    a{
        text-decoration: none;
        color: inherit;
    }
    button{
        background: none;
        border: none;
        cursor: pointer;

    }

`;
