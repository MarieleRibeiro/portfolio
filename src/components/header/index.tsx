import { Container, Name, Wrapper } from "./styles";
import { AboutMe } from '../../pages/AboutMe'

export function Header() {
  return (
    <Container>
      <Name>Mariele</Name>
      <Wrapper>
        <a href="/">Portfolio</a>
        <a href='/'>Let’s Talk ✌</a>
      </Wrapper>
    </Container>
  );
}
