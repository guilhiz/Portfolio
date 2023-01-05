import React, { useState } from "react";
import Hamburger from "hamburger-react";
import { Link } from "react-scroll";
import * as S from "./styles";

function HamburgerMenu() {
  const [isOpen, setOpen] = useState(false);

  return (
    <S.Container isOpen={isOpen}>
      <Hamburger toggled={isOpen} toggle={setOpen}></Hamburger>
      <S.Nav isOpen={isOpen}>
        <S.MenuList>
          <li>
            <Link activeClass="active" to="home" spy={true} smooth={true} offset={-100} duration={500}>
              Home
            </Link>
            <div></div>
          </li>
          <li>
            <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-65} duration={500}>
              Habilidades
            </Link>
            <div></div>
          </li>
          <li>
            <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-45} duration={500}>
              Projetos
            </Link>
            <div></div>
          </li>
          <li>
            <Link activeClass="active" to="contacts" spy={true} smooth={true} offset={-320} duration={500}>
              Contatos
            </Link>
            <div></div>
          </li>
        </S.MenuList>
      </S.Nav>
    </S.Container>
  );
}

export default HamburgerMenu;
