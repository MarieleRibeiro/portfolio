import { Container, Name, Wrapper } from "./styles";

export function Header() {
  return (
    <Container>
      <Name>Mariele</Name>
      <Wrapper>
        <a href="/">Portfólio</a>
        <a href='/aboutMe'>Let’s Talk ✌</a>
      </Wrapper>
    </Container>
  );
}
