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
    margin: 8% 0px;
  }
`;

export const ContainerCarousel = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Carousel = styled.ul`
  height: 85%;
  width: 90%;
  background-color: #bebebe6e;
`;
