import { Container, Name, Wrapper } from "./styles";

export function Header() {
  return (
    <Container>
      <Name>Mariele</Name>
      <Wrapper>
        <a href="/">Portfólio</a>
        <a href='/about'>Let’s Talk ✌</a>
      </Wrapper>
    </Container>
  );
}
