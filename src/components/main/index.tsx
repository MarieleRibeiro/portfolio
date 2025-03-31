import arrowRight from "../../assets/arrow-right.svg";
import projeto01 from "../../assets/project01.01.png";
import projeto02 from "../../assets/project02.2.png";
import projeto03 from "../../assets/project03.3.png";

import {
  Content,
  Projects,
  Button,
  Wrapper,
  Span,
  Footer,
  Pages,
} from "./styles";
import { useState } from "react";
import { MediaContacts } from "../footer";

const PROJECTS = [
  {
    index: 0,
    name: "Money",
    surname: "Transfer",
    description:
     
      "Projeto com o propósito de converter e transferir moedas de diferentes países. Desenvolvido com os conceitos e fundamentos do React, utilizando Styled-Components, Axios e hooks, trabalhando tambem a responsividade e consumindo uma API externa para busca e listagem de moedas.",
// 
    image: projeto01,
    url: "https://money-transfer-1nr8oed42-marieleribeiros-projects.vercel.app",
  },
  {
    index: 1,
    name: "Landing",
    surname: "Yoga",
    description:
      "Página de destino simples e responsiva com o propósito de marketing de um aplicativo. Desenvolvido com React, Styled-Components.",
    image: projeto02,
    url: "https://landing-page-yoga-marieleribeiro.vercel.app/",
  },
  {
    index: 2,
    name: "Dashboard",
    surname: "Inbox",
    description:
      "Projeto que tem como objetivo mostrar a interface simples de uma caixa de entrada, utilizando React e Styled-Components.",
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
        <MediaContacts />

        <Pages>
          <strong>{String(currentProject.index + 1).padStart(2, '0')}</strong>
          <hr />
          <strong>{String(PROJECTS.length).padStart(2, '0')}</strong>
        </Pages>
      </Footer>
    </>
  );
}
