import { Header } from "../../components/header";
import { MediaContacts } from "../../components/footer";
import { Content, Footer } from "../../components/main/styles";
import { Wrapper, Span, Profile } from "./styles";
import photo from "../../assets/photo001.jpeg";

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
              Olá, me chamo Mariele e estou na área de programação desde de 2020,
              comecei a estudar programação por conta própria, me apaixonei pela área e decidi me dedicar a ela.
            </p>
          </Span>
          <p>
            Comecei sem muitas perpectivas mas com o passar do tempo o universo
            da tecnologia acabou ganhando um espaço importante na minha vida, a
            vontande de aprender coisas novas e o entusiasmo me levaram a
            continuar e a querer crescer profissionalmente na área.
          </p>
          <p>
            Desde que comecei venho estudando diariamente e colocando em prática
            todo o conhecimento adquirido ao longo desse tempo. E nesse momento,
            mais preparada busco uma oportunidade na área de Front-End. Tenho
            conhecimento em HTML, CSS, JavaScript, React, Next.js, TypeScript,
            Tailwind, Styled Components, Git, GitHub, Figma, etc. Atualmente estou trabalhando com flutter e dart. 
          </p>
          <p>
            Atualmente trabalho como desenvolvedora Front-end júnior, estou em busca de novas oportunidade para aplicar meus conhecimentos
            e continuar crescendo profissionalmente na área de tecnologia.
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
