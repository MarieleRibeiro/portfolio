import arrowRight from "../../assets/arrow-right.svg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import projeto01 from "../../assets/project01.svg";
import projeto02 from "../../assets/project02.svg";
import projeto03 from "../../assets/project03.svg";

import {
  Content,
  Projects,
  Button,
  Wrapper,
  Span,
  Footer,
  Contacts,
  Pages,
} from "./styles";
import { useState } from "react";

const PROJECTS = [
  {
    index: 0,
    name: "Money",
    surname: "Transfer",
    description:
      "Projeto com a finalidade de conversão e transferência de moedas de diferentes países. Desenvolvido com os conceitos e fundamentos do React, utilizando Styled-Components, Axios e hooks e tendo uma Api externa para a busca e listagem das moedas.",
    image: projeto01,
    url: "https://money-transfer-zeta.vercel.app/",
  },
  {
    index: 1,
    name: "Landing",
    surname: "Yoga",
    description:
      "Landing Page simples e responsiva voltada para o marketing de um aplicativo. Desenvolvido com React, Styled-Components.",
    image: projeto02,
    url: "https://landing-page-yoga-marieleribeiro.vercel.app/",
  },
  {
    index: 2,
    name: "Dashboard",
    surname: "Inbox",
    description:
      "Projeto que tem por objetivo mostrar a interface simples de uma caixa de e-mail, utilizando React e Styled-Components.  ",
    image: projeto03,
    url: "https://dashboard-inbox.vercel.app/",
  },
];

export function Main() {
  const [currentProject, setCurrentProject] = useState(PROJECTS[0]);

  return (
    <>
      <Content>
        <Projects>
          <a href={currentProject.url} target="_blank" rel="noreferrer">
            <img src={currentProject.image} alt="projeto" />
          </a>
          <Button
            onClick={() => {
              if (currentProject.index === 2) {
                return setCurrentProject(PROJECTS[0]);
              }
              setCurrentProject(PROJECTS[currentProject.index + 1]);
            }}
          >
            <img src={arrowRight} alt="" />
          </Button>
        </Projects>
        <Wrapper>
          <h1>{currentProject.name}</h1>
          <h2>{currentProject.surname}</h2>
          <Span>
            <p>{currentProject.description}</p>
          </Span>
        </Wrapper>
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
            <FaLinkedin size={22} />
          </a>
        </Contacts>
        <Pages>
          <strong>0{currentProject.index + 1}</strong>
          <hr />
          <strong>03</strong>
        </Pages>
      </Footer>
    </>
  );
}
