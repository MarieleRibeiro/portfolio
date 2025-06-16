import styled from "styled-components";
export const Container = styled.div`
  /* height: 3.125rem; */
 
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 960px) {
  
   margin-bottom: 5%;
  }
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
