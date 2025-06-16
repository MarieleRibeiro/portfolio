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
  TitleContainer,
} from "./styles";
import { useState } from "react";
import { MediaContacts } from "../footer";

const PROJECTS = [
  {
    index: 0,
    name: "Money",
    surname: "Transfer",
    description:
      "Desenvolvi uma aplicação de conversão e transferência de moedas utilizando React, Styled-Components, Axios e hooks. Este projeto demonstra minha proficiência em integrações com APIs externas para dados de câmbio em tempo real e a criação de interfaces responsivas e otimizadas para uma experiência de usuário fluida.",
    image: projeto01,
    url: "https://money-transfer-1nr8oed42-marieleribeiros-projects.vercel.app",
  },
  {
    index: 1,
    name: "Landing",
    surname: "Yoga",
    description:
      "Criação de uma Landing Page responsiva e visualmente atraente para fins de marketing de um aplicativo de yoga, utilizando React e Styled-Components. O projeto foca em design intuitivo e otimização para conversão, garantindo uma experiência de usuário engajadora em múltiplos dispositivos.",
    image: projeto02,
    url: "https://landing-page-yoga-marieleribeiro.vercel.app/",
  },
  {
    index: 2,
    name: "Dashboard",
    surname: "Inbox",
    description:
      "Desenvolvimento de uma interface de caixa de entrada (Inbox) com React e Styled-Components, destacando princípios de componentização e design limpo. O projeto simula funcionalidades essenciais de um e-mail, focando na usabilidade e organização visual para uma navegação eficiente do usuário.",
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
          <TitleContainer>
            <h1>{currentProject.name}</h1>
            <h2>{currentProject.surname}</h2>
          </TitleContainer>
          <Span>
            <p>{currentProject.description}</p>
          </Span>
        </Wrapper>
      </Content>
      <Footer>
        <MediaContacts />

        <Pages>
          <div className="pagination">
            <span className="current">{currentProject.index + 1}</span>
            <span className="separator">/</span>
            <span className="total">{PROJECTS.length}</span>
          </div>
        </Pages>
      </Footer>
    </>
  );
}
