import { Header } from "../../components/header";
import { MediaContacts } from "../../components/footer";
import { Content, Footer } from "../../components/main/styles";
import { Wrapper, Span, Profile } from "./styles";
import perfil from "../../assets/perfil.svg";

export function About() {
  return (
    <>
      <Header />
      <Content>
        <Wrapper>
          <h1>Mariele</h1>
          <h2>Ribeiro</h2>
          <Span>
            <p>
              Keep away from people who try to belittle your ambitions, Small
              people always do that.
            </p>
          </Span>
        </Wrapper>
        <Profile>
          <img src={perfil} alt="foto" />
        </Profile>
      </Content>
      <Footer>
        <MediaContacts />
      </Footer>
    </>
  );
}
