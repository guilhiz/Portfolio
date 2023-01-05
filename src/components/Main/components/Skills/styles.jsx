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
    @media (max-width: 600px) {
      display: none;
    }

    > img {
      display: block;
      width: 80%;
    }
  }
`;

export const Skills = styled.ul`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px 0px;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const ContainerProgressBar = styled.li`
  width: 100%;
  height: 80px;
  padding: 8px;
  background-color: #bebebe6e;
  p {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 15px;
  }
`;
