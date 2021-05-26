import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Header } from "../../components/header";
import { Contacts, Content, Footer, Pages } from "../../components/main/styles";
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
              Olá, me chamo Mariele e estou estudando programação desde de 2020,
              mas precisamente á 01 ano nessa área. <br />
              Comecei sem muita perpectiva mas com o passar do tempo esse
              universo acabou ganhando um espaço importante na minha vida, a
              vontande de aprender coisas novas e o entusiasmo me levaram a
              continuar e a querer crescer profissionalmente.
              <br />
              Desde que comecei venho estudando diariamente e colocando em
              prática todo o conhecimento aquirido ao longo desse tempo. Busco
              uma oportunidade
            </p>
          </Span>
        </Wrapper>
        <Profile>
          <img src={perfil} alt="foto" />
        </Profile>
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
            <FaLinkedin size={22} />
          </a>
        </Contacts>
        <Pages>
          <a href="/">Projects</a>
        </Pages>
      </Footer>
    </>
  );
}
