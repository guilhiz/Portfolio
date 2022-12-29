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
    margin: 4% 0px;
  }
`;

export const ContainerSkills = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  > div {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    > img {
      display: block;
      width: 80%;
    }
  }
`;

export const Skills = styled.div`
  background-color: #bebebe6e;
`
