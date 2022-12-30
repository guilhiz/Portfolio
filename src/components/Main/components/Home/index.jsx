import React from "react";
import Typewriter from "typewriter-effect";
import profileImg from "../../../../assets/profile.jpeg";
import { useVanta } from "./hooks";
import * as S from "./styles";

function Home() {
const { vantaRef } = useVanta()

  return (
    <S.Container ref={vantaRef} id="home">
      <S.Content>
        <S.ContainerText>
          <h2>Guilherme Vilela</h2>
          <div>
            <p>Desenvolvedor</p>
            <Typewriter options={{ strings: ["Front-end", "Back-end"], autoStart: true, loop: true }} />
          </div>
        </S.ContainerText>
        <S.ContainerImg>
          <img src={profileImg} alt="Imagem de perfil" />
        </S.ContainerImg>
      </S.Content>
    </S.Container>
  );
}

export default Home;
