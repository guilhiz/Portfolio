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
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 72%;
  .carousel {
    height: 100%;
    width: 100%;
    padding: 25px;
    padding-right: 300px;
    background-color: #bebebe6e;
  }

  .card {
    height: 100%;
    width: 500px;
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

    p {
      font-size: 1.2em;
      color: ${(props) => props.theme.text};
      height: 15%;
    }
  }
`;

export const ContainerImg = styled.div`
  height: 65%;
  width: 100%;
  margin-bottom: 25px;
  box-shadow: 0px 0px 4px #23232386;

  img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export const ProjectTitle = styled.h3`
  font-size: 1.5em;
  font-weight: 700;
  margin: 15px 0px;
  color: ${(props) => props.theme.title};
  text-align: center;
`;

export const CardImg = styled.div``;

export const ButtonInfo = styled.button`
  transform: translate(-50%, 125%);
  width: 60%;
  border-radius: 1rem;
  border: none;
  background-color: ${(props) => props.theme.highlight};
  color: ${(props) => props.theme.textBtn};
  font-size: 1rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  position: absolute;
  left: 50%;
  bottom: 0;
  opacity: 0;
  cursor: pointer;
  transition: 0.3s ease-out;
  :hover {
    background-color: #4827E7;
  }
`;
