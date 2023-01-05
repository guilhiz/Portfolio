import React from "react";
import { useScroll } from "./hooks";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-scroll";
import * as S from "./styles";

function Header() {
  const { small } = useScroll();

  return (
    <S.Container small={small}>
      <S.Content>
        <h1>
          Port<span>fólio</span>
        </h1>
        <S.Navbar>
          <li>
            <Link activeClass="active" to="home" spy={true} smooth={true} offset={-100} duration={500}>
              Home
            </Link>
            <div></div>
          </li>
          <li>
            <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-40} duration={500}>
              Habilidades
            </Link>
            <div></div>
          </li>
          <li>
            <Link activeClass="active" to="projects" spy={true} smooth={true} offset={0} duration={500}>
              Projetos
            </Link>
            <div></div>
          </li>
          <li>
            <Link activeClass="active" to="contacts" spy={true} smooth={true} offset={-400} duration={500}>
              Contatos
            </Link>
            <div></div>
          </li>
        </S.Navbar>
      </S.Content>
    </S.Container>
  );
}

export default Header;
