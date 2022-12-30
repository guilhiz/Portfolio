import React from "react";
import { useAos } from "../../../../hooks";
import email from "../../../../assets/email.png";
import github from "../../../../assets/github.png";
import linkedin from "../../../../assets/linkedin.png";
import * as S from "./styles";

function Contacts() {
  useAos();

  return (
    <S.Container id="contacts">
      <S.Content>
        <h3 data-aos="fade-right">
          Guilherme <span>Vilela</span>
        </h3>
        <S.ContainerIcons data-aos="fade-up">
          <div>
            <a href="mailto:guilhermevilelasobral@gmail.com" target="_blank">
              <img src={email} alt="" />
            </a>
          </div>
          <div>
            <a href="https://github.com/guilhiz" target="_blank">
              <img src={github} alt="" />
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/guilhiz/" target="_blank">
              <img src={linkedin} alt="" />
            </a>
          </div>
        </S.ContainerIcons>
      </S.Content>
    </S.Container>
  );
}

export default Contacts;
