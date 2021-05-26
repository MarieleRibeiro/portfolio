import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  display: flex;
  @media (max-width: 960px) {
    flex-direction: column-reverse;
    /* width: 100%; */
    align-items: center;
    justify-content: center;
  }
`;
export const Wrapper = styled.div`
  z-index: 999;
  @media (max-width: 960px) {
    width: 90%;
  }

  h1 {
    margin-left: -2.1875rem;
    width: 22.5rem;
    @media (max-width: 960px) {
      font-size: 4.375rem;
      margin: auto;
    }
  }
  h2 {
    margin-left: -5.625rem;
    @media (max-width: 960px) {
      margin: auto;
    }
  }
`;
export const Span = styled.div`
  max-width: 22.25rem;
  width: 100%;
  height: 4.125rem;
  margin: 2.5rem 0 0 2rem;
  @media (max-width: 960px) {
    margin: 0;
    
    }
`;
export const Projects = styled.div`
  max-width: 877px;
  width: 100%;
  position: relative;
  z-index: 1;
  background: linear-gradient(
      249.37deg,
      rgba(37, 36, 37, 0.71) 11.85%,
      rgba(255, 255, 255, 0) 97.61%
    ),
    url(.svg), #c4c4c4;

  a > img {
    width: 100%;
  }
`;
export const Button = styled.button`
  width: 8.62rem;
  position: absolute;
  border: none;
  background: transparent;
  bottom: -20px;
  right: 0.25rem;
  @media (max-width: 960px) {
    right: -1.75rem;
  }

  @media (max-width: 960px) {
    img {
      width: 70%;
    }
  }
`;
export const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 51px;
`;
export const Contacts = styled.div`
  a:nth-child(2) {
    margin: 0 2rem;
  }
`;
export const Pages = styled.div`
  color: #ffff;
  display: flex;
  align-items: center;
  justify-content: center;

  strong {
    font-weight: 600;
    font-size: 18px;
    :first-child {
      color: #e5a67c;
    }
  }

  hr {
    width: 6.375rem;
    height: 0px;
    border: 1px solid #ffffff;
    margin: 0 11px;
  }
`;
