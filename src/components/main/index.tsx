import arrowRight from "../../assets/arrow-right.svg";
import projeto1 from "../../assets/projeto1.png";

import styled from "styled-components";
const Container = styled.div`
  width: 100%;
`;
const Content = styled.div`
  display: flex;
`;
const Wrapper = styled.div`
  width: 100%;
  z-index: 999;

  h1 {
    margin-left: -35px;
  }
  h2 {
    margin-left: -90px;
  }
`;
const Span = styled.div`
  max-width: 356px;
  width: 100%;
  height: 66px;
  margin: 30px 0 0 33px;
`;
const Projects = styled.div`
  max-width: 877px;
  width: 100%;
  position: relative;
  z-index: 1;

  img {
    width: 100%;
  }
`;
const Button = styled.button`
  position: absolute;
  background: transparent;
  bottom: 0;
  right: 5%;
`;
const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 51px;
`;
const Contacts = styled.div``;
const Pages = styled.div`
  color: #ffff;
  display: flex;
  strong {
    font-weight: 600;
    font-size: 18px;
  }
`;

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
            GH
          </a>
          <a href="">FB</a>
          <a href="">LK</a>
        </Contacts>
        <Pages>
          <strong>1</strong> ––––– <strong>3</strong>
        </Pages>
      </Footer>
    </Container>
  );
}
