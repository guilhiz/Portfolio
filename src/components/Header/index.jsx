import React, { useEffect, useState } from "react";
import * as S from "./styles";

function Header() {
  const [small, setSmall] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => setSmall(window.pageYOffset > 80));
      console.log("puta")
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
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#skills">Habilidades</a>
          </li>
          <li>
            <a href="#projects">Projetos</a>
          </li>
          <li>
            <a href="">Contatos</a>
          </li>
        </S.Navbar>
      </S.Content>
    </S.Container>
  );
}

export default Header;
