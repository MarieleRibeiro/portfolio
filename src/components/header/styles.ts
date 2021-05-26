import styled from "styled-components";
export const Container = styled.div`
  height: 3.125rem;
  margin-bottom: 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Name = styled.div`
  width: 7.5rem;
  height: 3rem;
  background: #2b2a2b;
  color: #ffff;
  font-size: 1.125rem;
  font-family: "Playfair Display";
  font-style: italic;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Wrapper = styled.div`
 @media (max-width: 960px) {
  
    a:first-child {
      display: none;
    }
    }
  a {
    margin-left: 2.75rem;
  }
`;
