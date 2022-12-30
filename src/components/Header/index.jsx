import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import * as S from "./styles";

function Header() {
  const [small, setSmall] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => setSmall(window.pageYOffset > 80));
      console.log("puta");
    }
  }, []);

  return (
    <S.Container small={small}>
      <S.Content>
        <h1>
          Port<span>fólio</span>
        </h1>
        <S.Navbar>
          <li>
            <Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500}>
              Home
            </Link>
            <div></div>
          </li>
          <li>
            <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500}>
              Habilidades
            </Link>
            <div></div>
          </li>
          <li>
            <Link activeClass="active" to="projects" spy={true} smooth={true} offset={50} duration={500}>
              Projetos
            </Link>
            <div></div>
          </li>
          <li>
            <Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500}>
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
