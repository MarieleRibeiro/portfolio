import styled from "styled-components";

export const TitleContainer = styled.div`
  display: flex;
  /* flex-direction: column; */
  
  @media (max-width: 960px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  /* max-width: 480px; */
  
  h1 {
    font-size: 3.5rem;
    font-weight: 700;
    background: linear-gradient(45deg, #e5a67c, #ff6b6b);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 0.5rem;
    min-height: 3.5rem;
    max-width: 100%;
    display: flex;
    align-items: center;
    line-height: 1.2;
    
    @media (max-width: 960px) {
      font-size: 2.5rem;
      min-height: 3rem;
      margin-bottom: 0;
      line-height: 1.2;
    }
  }
  
  h2 {
    font-size: 2rem;
    color: #fff;
    margin-bottom: 0.8rem;
    min-height: 2.5rem;
    max-width: 100%;
    display: flex;
    align-items: center;
    line-height: 1.2;
    
    @media (max-width: 960px) {
      font-size: 1.8rem;
      min-height: 2.2rem;
      margin-bottom: 0;
      line-height: 1.2;
    }
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #a0a0a0;
    margin-bottom: 1rem;
    min-height: 1.5rem;
  }
  
  @media (max-width: 960px) {
    width: 90%;
    text-align: center;
    max-width: none;
    
    p {
      font-size: 1rem;
      line-height: 1.5;
      margin-bottom: 0.8rem;
    }
  }
`;

export const Span = styled.div`
  max-width: 22.25rem;
  width: 100%;
  margin: 1rem 0;
  
  p {
    font-size: 0.95rem;
    line-height: 1.6;
    color: #a0a0a0;
  }
  
  @media (max-width: 960px) {
    margin: 0.5rem 0;
    text-align: center;
    max-width: 100%;
    padding: 0 1rem;
    
    p {
      font-size: 1rem;
      line-height: 1.7;
    }
  }
`;

export const Profile = styled.div`
  max-width: 280px;
  width: 100%;
  position: relative;
  z-index: 1;
  aspect-ratio: 3/4;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }
`;
