import React, { useState, useEffect, useRef } from "react";
import profileImg from "../../../../assets/profile.jpeg";
import CLOUDS from "vanta/dist/vanta.clouds.min";
import * as THREE from "three";
import * as S from "./styles";

function Home() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        CLOUDS({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <S.Container ref={vantaRef}>
      <S.Content>
        <S.ContainerText>
          <h2>Guilherme Vilela</h2>
          <p>
            Desenvolvedor <span>Front-end</span>
          </p>
        </S.ContainerText>
        <S.ContainerImg>
          <img src={profileImg} alt="Imagem de perfil" />
        </S.ContainerImg>
      </S.Content>
    </S.Container>
  );
}

export default Home;