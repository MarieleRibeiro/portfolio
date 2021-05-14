import projeto1 from "../../assets/projeto1.png";

import styled from "styled-components";
const Container = styled.div`
  width: 100%;
  margin: 0 0 51px 49px;
  display: flex;
`;
const Wrapper = styled.div`
  width: 100%;
`;
const Span = styled.div`
  width: 356px;
  height: 66px;
`;
const Projects = styled.div`
  width: 100%;
`;

export function Main() {
  return (
    <Container>
      <Projects>
        <img src={projeto1} alt="projeto" />
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
    </Container>
  );
}
