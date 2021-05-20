import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import { Header } from "../../components/header";

import styled from "styled-components";
const Content = styled.div``;
const Profile = styled.div``;
const Wrapper = styled.div``;
const Span = styled.div``;
const Footer = styled.div``;
const Contacts = styled.div``;

const Pages = styled.div``;

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
          <img src="" alt="projeto" />
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
          <a href="/">Projects</a>
        </Pages>
      </Footer>
    </>
  );
}
