import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0; 
  padding: 0; 
  border: 0;
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
}

body {
  width: 100%;
 background: #252425;
 -webkit-font-smoothing: antialiased; 
}

h1 {
  font-family: 'Playfair Display', serif;
  font-weight: 400;
  font-size: 96px;
 color: #FFFFFF;
}
h2 {
  font-family: 'Playfair Display', serif;
  font-weight: 400;
  font-size: 96px;
  color: #E5A67C;

}
a {
  text-decoration: none; 
  color: inherit;
  display: inline-block; 
 color: #FFFFFF;
 font-weight: 400;
 font-size: 18px;
 margin-left: 44px;
 line-height: 22px;
}
 
p {
  font-size: 18px;
  color: #FFFFFF;
  line-height: 22px;

}

`;
