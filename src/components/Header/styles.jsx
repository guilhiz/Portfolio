import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
  padding: 0px 5%;


  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  h1 {
    font-size: 42px;
    font-weight: 700;
    color: ${(props) => props.theme.title};
    > span {
      color: ${(props) => props.theme.highlight};
    }
  }
`;

export const Navbar = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 30%;
  li {
    font-size: 24px;
    font-weight: 500;
  }
`
