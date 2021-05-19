import arrowRight from "../../assets/arrow-right.svg";
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import projeto1 from "../../assets/projeto1.png";

import {
  Container,
  Content,
  Projects,
  Button,
  Wrapper,
  Span,
  Footer,
  Contacts,
  Pages,
} from "./styles";

export function Main() {
  return (
    <Container>
      <Content>
        <Projects>
          <a
            href="https://money-transfer-zeta.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={projeto1} alt="projeto" />
          </a>
          <Button>
            <img src={arrowRight} alt="" />
          </Button>
        </Projects>
        <Wrapper>
          <h1>Still</h1>
          <h2>Together</h2>
          <Span>
            <p>
              Keep away from people who try to belittle your ambitions, Small
              people always do that.
            </p>
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
          <strong>01</strong>
          <hr />
          <strong>03</strong>
        </Pages>
      </Footer>
    </Container>
  );
}
