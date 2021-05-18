import { Header } from "../../components/header";
import { Main } from "../../components/main";

import styled from "styled-components";
const Container = styled.div`
  max-width: 1440px;
  width: 100%;
`;

export function Portfolio() {
  return (
    <Container>
      <Header />
      <Main />
    </Container>
  );
}
