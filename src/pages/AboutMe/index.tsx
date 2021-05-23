import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import { Header } from "../../components/header";
import {
  Contacts,
  Content,
  Footer,
  Pages
} from "../../components/main/styles";
import perfil from "../../assets/perfil.svg"

import styled from "styled-components";
const Profile = styled.div`
  max-width: 550px;
  width: 100%;
  position: relative;
  width: 100%;
  z-index: -1;
  background: 
  linear-gradient(249.37deg, rgba(37, 36, 37, 0.71) 
  11.85%, rgba(255, 255, 255, 0) 97.61%), url(.png), #C4C4C4;
  
   img {
      width: 100%;
     }
`;
const Wrapper = styled.div`
z-index: 1;
width: 356px;

h1 {
  margin-left: 7.1875rem;
  /* width: 375px; */
}
h2 {
  margin-left: 11.625rem;
}
`
const Span = styled.div`
  max-width: 356px;
  /* width: 100%; */
  height: 4.125rem;
  margin: 2.5rem 72px 0px 0;
`;

export function AboutMe() {
  return (
    <>
      <Header />
      <Content>
        <Wrapper>
          <h1>Mariele</h1>
          <h2>Ribeiro</h2>
          <Span>
            <p>
              Keep away from people who try to belittle your ambitions, Small
              people always do that.
            </p>
          </Span>
        </Wrapper>
        <Profile>
          <img src={perfil} alt="foto" />
        </Profile>
      </Content>
      <Footer>
        <Contacts>
          <a
            href="https://github.com/MarieleRibeiro"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://github.com/MarieleRibeiro"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook size={22} />
          </a>
          <a
            href="https://github.com/MarieleRibeiro"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={22} />
          </a>
        </Contacts>
        <Pages>
          <a href="/projects">Projects</a>
        </Pages>
      </Footer>
    </>
  );
}
