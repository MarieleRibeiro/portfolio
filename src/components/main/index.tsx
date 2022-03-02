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
      "Project with the purpose of converting and transferring currencies from different countries. Developed with the concepts and fundamentals of React, using Styled-Components, Axios and hooks and having an external Api for searching and listing currencies.",
    image: projeto01,
    url: "https://transfer-money.vercel.app/",
  },
  {
    index: 1,
    name: "Landing",
    surname: "Yoga",
    description:
      "Simple and responsive landing page aimed at marketing an app. Developed with React, Styled-Components.",
    image: projeto02,
    url: "https://landing-page-yoga-marieleribeiro.vercel.app/",
  },
  {
    index: 2,
    name: "Dashboard",
    surname: "Inbox",
    description:
      "Project that aims to show the simple interface of an inbox, using React and Styled-Components.",
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
          <strong>0{currentProject.index + 1}</strong>
          <hr />
          <strong>03</strong>
        </Pages>
      </Footer>
    </>
  );
}
