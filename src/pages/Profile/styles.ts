import styled from "styled-components";

export const Profile = styled.div`
  max-width: 550px;
  width: 100%;
  position: relative;
  width: 100%;
  z-index: -1;
  /* background: 
  linear-gradient(249.37deg, rgba(37, 36, 37, 0.71) 
  11.85%, rgba(255, 255, 255, 0) 97.61%), url(.png), #C4C4C4; */

  @media (max-width: 960px) {
    margin-top: 2rem;
  }

  img {
    width: 100%;
  }
`;
export const Wrapper = styled.div`
  z-index: 1;
  width: 356px;
  @media (max-width: 960px) {
    width: 100%;
  }

  h1 {
    margin-left: 7.1875rem;
    /* width: 375px; */
    @media (max-width: 960px) {
      width: 100%;
      font-size: 4.375rem;
      margin: auto;
    }
  }
  h2 {
    margin-left: 11.625rem;
    @media (max-width: 960px) {
      width: 100%;
      font-size: 4.375rem;
      margin-left: 45px;
    }
  }
`;
export const Span = styled.div`
  max-width: 356px;
  /* width: 100%; */
  height: 4.125rem;
  margin: 2.5rem 72px 0px 0;
`;
