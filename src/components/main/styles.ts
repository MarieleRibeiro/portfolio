import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  display: flex;
  gap: 4rem;
  padding: 1rem;
  align-items: center;
  min-height: calc(100vh - 150px);
  justify-content: center;
  
  @media (max-width: 960px) {
    flex-direction: column-reverse;
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    min-height: auto;
  }
`;

export const Wrapper = styled.div`
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 400px;
  
  @media (max-width: 960px) {
    width: 90%;
    text-align: center;
    max-width: none;
  }

  h1 {
    font-size: 3.5rem;
    font-weight: 700;
    background: linear-gradient(45deg, #e5a67c, #ff6b6b);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 0.5rem;
    min-height: 4rem;
    max-width: 100%;
    display: flex;
    align-items: center;
    line-height: 1.1;
    
    @media (max-width: 960px) {
      font-size: 2.8rem;
      min-height: 3.2rem;
      margin-bottom: 0;
    }
  }
  
  h2 {
    font-size: 2.2rem;
    color: #fff;
    margin-bottom: 1rem;
    min-height: 2.8rem;
    max-width: 100%;
    display: flex;
    align-items: center;
    line-height: 1.1;
    
    @media (max-width: 960px) {
      font-size: 1.8rem;
      min-height: 2.4rem;
      margin-bottom: 0;
    }
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  @media (max-width: 960px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }
`;

export const Span = styled.div`
  max-width: 22.25rem;
  width: 100%;
  margin: 1.5rem 0;
  
  p {
    font-size: 0.95rem;
    line-height: 1.4;
    color: #a0a0a0;
  }
  
  @media (max-width: 960px) {
    margin: 1rem 0;
    text-align: center;
    max-width: 100%;
    padding: 0 1rem;
    
    p {
      font-size: 1rem;
      line-height: 1.5;
    }
  }
`;

export const Projects = styled.div`
  max-width: 1000px;
  width: 100%;
  position: relative;
  z-index: 1;
  aspect-ratio: 16/9;
  flex: 1;
  
  a {
    display: block;
    width: 100%;
    height: 100%;
    transition: transform 0.3s ease;
    cursor: pointer;
    
    &:hover {
      transform: scale(1.02);
    }
    
    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 20px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    }
  }
`;

export const Button = styled.button`
  width: 4rem;
  height: 4rem;
  position: absolute;
  border: none;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 50%;
  bottom: 1rem;
  right: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.1);
  }
  
  img {
    width: 1.5rem;
    height: 1.5rem;
    filter: brightness(0) invert(1);
  }
  
  @media (max-width: 960px) {
    width: 3.5rem;
    height: 3.5rem;
    bottom: 0.5rem;
    right: 0.5rem;
  }
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  
  @media (max-width: 960px) {
    flex-direction: row;
    gap: 1.5rem;
    padding: 0 1rem;
  }
`;

export const Pages = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 50px;
  backdrop-filter: blur(10px);

  .pagination {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.1rem;
    
    .current {
      color: #e5a67c;
      font-weight: 600;
    }
    
    .separator {
      color: rgba(255, 255, 255, 0.5);
    }
    
    .total {
      color: rgba(255, 255, 255, 0.7);
    }
  }
`;