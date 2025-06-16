import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  padding: 1rem 0;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
 
`;

export const Contacts = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  a {
    color: #fff;
    transition: all 0.3s ease;
    padding: 0.5rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.1);

    &:hover {
      transform: translateY(-3px);
      background-color: rgba(255, 255, 255, 0.2);
    }

    &#github:hover {
      color: #6e5494;
    }

    &#linkedin:hover {
      color: #0077b5;
    }
  }
`;
