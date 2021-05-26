import styled from "styled-components";
export const Profile = styled.div`
  /* position: relative;
  z-index: -1; */

  @media (max-width: 960px) {
    margin: 1rem;
  }

  img {
    width: 100%;
  }
`;
export const Wrapper = styled.div`
  z-index: 1;

  h1 {
    margin-left: 7.1875rem;
    /* width: 375px; */
    @media (max-width: 960px) {
      font-size: 4.375rem;
      margin-left: 3.1875rem;
    }
  }
  h2 {
    margin-left: 18.625rem;
    line-height: 0;
    @media (max-width: 960px) {
      font-size: 4.375rem;
      margin-left: 6.625rem;
    }
  }
`;
export const Span = styled.div`
  margin-top: 4.5rem;
  /* width: 100%; */

  /* margin: 2.5rem 72px 0px 0;
  @media (max-width: 960px) {
    margin: 0;
  } */
`;
