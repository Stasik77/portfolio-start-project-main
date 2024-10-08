import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

export const GlobalStyled = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    body {
  margin: 0;
  font-family:"Roboto", "Poppins" -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height:1.2;
   min-width:360px;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

a{
    text-decoration:none;

}

ul {
    list-style:none;
}

button {
    background-color:unset;
    border:none
}

section {
  padding:70px 0;
  @media ${theme.media.mobile}, ${theme.media.tablet} {
    padding:0;
  }
}
 
section:first-child{
 background-color: ${theme.colors.primaryBg};
} 

 

`
