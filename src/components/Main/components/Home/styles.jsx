import styled from "styled-components";

export const Container = styled.div`
  padding: 0px 8%;
`;

export const Content = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;

  > h2 {
    margin-bottom: 8px;
  }
  > div {
    display: flex;
    font-size: 30px;
    font-weight: 500;
    color: ${(props) => props.theme.text};
    width: 90%;
    > p {
      color: ${(props) => props.theme.text};
    }
    > div {
      color: ${(props) => props.theme.highlight};
      margin-left: 5px;
    }
  }
`;

export const ContainerImg = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  @media (max-width: 800px) {
    display: none;
  }

  img {
    display: block;
    width: 99%;
    clip-path: polygon(50% 0%, 77% 16%, 96% 35%, 50% 100%, 8% 73%, 5% 33%, 20% 10%);
  }
`;
