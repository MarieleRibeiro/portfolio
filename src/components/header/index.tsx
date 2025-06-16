import { Container, Wrapper } from "./styles";

export function Header() {
  return (
    <Container>
      {/* <Name>Mariele</Name> */}
      <Wrapper>
        <a href="/">Projetos</a>
        <a href="/about">Vamos conversar ✌</a>
      </Wrapper>
    </Container>
  );
}
