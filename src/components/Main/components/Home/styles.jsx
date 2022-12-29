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
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > h2 {
    margin-bottom: 8px;
  }
  > p {
    font-size: 30px;
    font-weight: 500;
    color: ${(props) => props.theme.text};
  }
  span {
    color: ${(props) => props.theme.highlight};
  }
`;

export const ContainerImg = styled.div`
  width: 300px;
  height: 300px;
  background: linear-gradient(145deg, #cacaca1a, #b3bdc2);
  border-radius: 50%;

  img {
    display: block;
    width: 99%;
    clip-path: polygon(50% 0%, 77% 16%, 96% 35%, 50% 100%, 8% 73%, 5% 33%, 20% 10%);
  }
`;
