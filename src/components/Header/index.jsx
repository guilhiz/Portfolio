import React from "react";
import * as S from "./styles";

function Header() {
  return (
    <S.Container>
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
