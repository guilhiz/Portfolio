import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: ${(props) => (props.isOpen ? "220px" : "0px")};
  transition: all ease-in 600ms;
  > div {
    margin: 10px 10px;
  }
  @media (min-width: 800px) {
    display: none;
  }
`;
export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #bebebee2;
  width: 100%;
  height: 100%;
  transform: ${(props) => props.isOpen === false && "translateX(300px)"};
  transition: all ease-in 600ms;
`;

export const MenuList = styled.ul`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  li {
    position: relative;
    :hover {
      div {
        width: 100%;
      }
    }
  }
  a {
    font-size: 24px;
    font-weight: 500;
    cursor: pointer;
    :hover {
      color: ${(props) => props.theme.highlight};
      div {
        width: 100%;
      }
    }
  }
  div {
    position: absolute;
    background-color: ${(props) => props.theme.highlight};
    width: 0%;
    height: 3px;
    transition: all ease-in 0.3s;
  }
`;
