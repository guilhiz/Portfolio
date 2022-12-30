import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0px 8%;
  background-color: ${(props) => props.theme.background};
  background-image: url("https://www.transparenttextures.com/patterns/large-leather.png");
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  > h2 {
    margin: 8% 0px 4%;
  }
`;

export const ContainerCarousel = styled.div`
  width: 100%;
  height: 72%;
  position: relative;
  .carousel {
    display: flex;
    height: 500px;
    width: 100%;
    padding: 30px;
    background-color: #bebebe6e;
    flex-shrink: 100 !important;
  }

  .card {
    max-width: 500px;
    height: auto;
    border-radius: 20px;
    background: linear-gradient(225deg, #ffffff 0%, #cacaca 100%);
    position: relative;
    padding: 0px 1rem;
    border: 2px solid #c3c6ce;
    transition: 0.5s ease-out;
    :hover {
      border-color: ${(props) => props.theme.highlight};
      box-shadow: 0 8px 11px #23232386;
      scale: 1.01;
      button {
        transform: translate(-50%, 50%);
        opacity: 1;
      }
    }
  }
`;
export const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 15px 0px;
  color: ${(props) => props.theme.title};
  text-align: center;
`;

export const CardText = styled.p`
  font-size: 1.2rem;
  color: ${(props) => props.theme.text};
  height: 15%;
`;

export const ContainerImg = styled.div`
  height: 65%;
  width: 100%;
  box-shadow: 0px 0px 4px #3a3a3a85;
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export const ButtonInfo = styled.button`
  transform: translate(-50%, 125%);
  width: 50%;
  border-radius: 1rem;
  border: none;
  background-color: ${(props) => props.theme.highlight};
  color: ${(props) => props.theme.textBtn};
  font-size: 1.2rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  position: absolute;
  left: 50%;
  bottom: 0;
  opacity: 0;
  cursor: pointer;
  transition: 0.3s ease-out;
  :hover {
    background-color: #4827e7;
  }
`;

export const ArrowLeft = styled.img`
  display: block;
  width: 32px;
  position: absolute;
  top: 50%;
  left: -40px;
  z-index: 999;
  cursor: pointer;
  :hover {
    opacity: 0.6;
  }
`;
export const ArrowRight = styled.img`
  display: block;
  width: 32px;
  position: absolute;
  top: 50%;
  right: -40px;
  z-index: 999;
  cursor: pointer;
  :hover {
    opacity: 0.6;
  }
`;
