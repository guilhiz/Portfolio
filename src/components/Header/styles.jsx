import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: ${(props) => (props.small ? "80px" : "50px")};
  padding: 0rem 5%;
  scale: ${(props) => props.small === false && "1.05"};

  background: ${(props) => props.small === false && "#ffffff0"};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  & {
    background: ${(props) => props.small && "#bebebe"};
    scale: ${(props) => props.small && "1"};
    transition: all ease-out 0.3s;
  }
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
    cursor: pointer;
    > span {
      color: ${(props) => props.theme.highlight};
    }
  }
`;

export const Navbar = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  @media (max-width: 800px) {
    display: none;
  }
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
