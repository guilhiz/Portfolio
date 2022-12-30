import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  height: 60vh;
  padding: 0px 8%;
  background-color: ${(props) => props.theme.background};
  background-image: url("https://www.transparenttextures.com/patterns/large-leather.png");
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  margin-top: 5%;
  h3 {
    font-size: 52px;
    font-weight: 600;
    color: ${(props) => props.theme.title};
    text-align: center;
  }
  span {
    color: ${(props) => props.theme.highlight};
  }
`;

export const ContainerIcons = styled.ul`
  height: 200px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0px 25px;
  div {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    cursor: pointer;
    :hover {
      transform: translateY(-7px);

    }
  }
`;
