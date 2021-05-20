import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
 background: #252425;
 -webkit-font-smoothing: antialiased; 
}
button {
  cursor: pointer;
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
 line-height: 22px;
}
 
p {
  font-size: 18px;
  color: #FFFFFF;
  line-height: 22px;

}

html {
  @media (max-width: 1080px){
    font-size: 93.75%; // 15px
  }
  @media (max-width: 720px) {
    font-size: 87.5%; // 14px
  }
}

`;
