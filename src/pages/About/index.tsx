import { Header } from "../../components/header";
import { MediaContacts } from "../../components/footer";
import { Content, Footer } from "../../components/main/styles";
import { Wrapper, Profile, TitleContainer } from "./styles";
import photo from "../../assets/photo001.jpeg";

export function About() {
  return (
    <>
      <Header />
      <Content>
        <Wrapper>
          <TitleContainer>
            <h1>Mariele</h1>
            <h2>Ribeiro</h2>
          </TitleContainer>
          <p>
            Olá! Sou Mariele, desenvolvedora Front-end apaixonada por criar interfaces intuitivas e experiências digitais impactantes. Desde 2020, venho me dedicando ao desenvolvimento web, transformando minha curiosidade inicial em uma carreira promissora na área de tecnologia.
          </p>
          <p>
            Minha jornada na programação começou como autodidata, e com o tempo, a tecnologia se tornou uma parte fundamental da minha vida. A constante evolução da área e a oportunidade de criar soluções inovadoras me motivam a aprender e crescer cada vez mais.
          </p>
          <p>
            Atualmente trabalho como desenvolvedora Front-end júnior, com foco em criar interfaces modernas e responsivas. Minha stack inclui:
            <br />
            • Front-end: HTML, CSS, JavaScript, React, Next.js, TypeScript
            <br />
            • Estilização: Tailwind, Styled Components
            <br />
            • Mobile: Flutter e Dart
            <br />
            • Ferramentas: Git, GitHub, Figma
          </p>
          <p>
            Estou sempre em busca de novos desafios e oportunidades para aplicar meus conhecimentos, contribuir com projetos inovadores e continuar minha evolução profissional na área de tecnologia.
          </p>
        </Wrapper>
        <Profile>
          <img src={photo} alt="foto" />
        </Profile>
      </Content>
      <Footer>
        <MediaContacts />
      </Footer>
    </>
  );
}
