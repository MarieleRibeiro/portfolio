import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
  padding: 2rem 1rem;
 background: #252425;
 -webkit-font-smoothing: antialiased; 
}
button {
  cursor: pointer;
  outline: none;
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
  display: inline-block; 
 color: #FFFFFF;
 font-weight: 400;
 font-size: 18px;
 line-height: 22px;

 :hover {
   color: #E5A67C;
 }
}
 
p {
  font-size: 18px;
  color: #FFFFFF;
  line-height: 22px;

}

`;
