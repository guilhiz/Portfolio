import React from "react";
import * as S from "./styles";
import skillSvg from "../../../../assets/dev-skills.png";

function Skills() {
  return (
    <S.Container id="skills">
      <S.Content>
        <h2>Habilidades</h2>
        <S.ContainerSkills>
          <div>
            <img src={skillSvg} alt="" />
          </div>
          <S.Skills>

          </S.Skills>
        </S.ContainerSkills>
      </S.Content>
    </S.Container>
  );
}

export default Skills;
