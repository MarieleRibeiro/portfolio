import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  @media (max-width: 1080px){
    font-size: 93.75%; // 15px
  }
  @media (max-width: 720px) {
    font-size: 87.5%; // 14px
  }
}

body {
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
  padding: 2.5rem 1rem;
  background: #252425;

  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
 -webkit-font-smoothing: antialiased; 
}
button {
  cursor: pointer;
  outline: none;
}

h1 {
  font-family: 'Playfair Display', serif;
  font-weight: 400;
  font-size: 6rem;
  color: #FFFFFF;
}

h2 {
  font-family: 'Playfair Display', serif;
  font-weight: 400;
  font-size: 6rem;
  color: #E5A67C;
}

a {
  text-decoration: none; 
  display: inline-block; 
  color: #FFFFFF;
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 22px;

 :hover {
   color: #E5A67C;
 }
}
 
p {
  text-indent: 1rem;
  font-size: 1.125rem;
  color: #FFFFFF;
  line-height: 22px;

}

`;
