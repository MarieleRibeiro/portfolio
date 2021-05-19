import { Header } from "../../components/header";
import { Main } from "../../components/main";

import styled from "styled-components";
const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

export function Portfolio() {
  return (
    <Container>
      <Header />
      <Main />
    </Container>
  );
}
