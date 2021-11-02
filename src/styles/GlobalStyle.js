import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root { 
        --primary-heading-font-size:13px;
        --primary-heading-font-weight:700px;
        --primary-paragraph-font-size:15px;
        --primary-paragraph-font-color:#282829;
        --primary-paragraph-line-height:21px;
        --primary-small-label-font-size:13px;

     }
        
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
