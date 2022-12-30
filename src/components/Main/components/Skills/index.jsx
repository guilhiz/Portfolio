import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import * as S from "./styles";
import skillSvg from "../../../../assets/dev-skills.png";
import { useSkills } from "./hooks";

function Skills() {
  const { display } = useSkills();

  return (
    <S.Container id="skills">
      <S.Content>
        <h2 data-aos="fade-up">Habilidades</h2>
        <S.ContainerSkills data-aos="fade-up">
          <div>
            <img src={skillSvg} alt="" />
          </div>
          <S.Skills data-aos="fade-up">
            <S.ContainerProgressBar>
              <p>HTML/CSS</p>
              <ProgressBar completed={display ? 95 : 0} baseBgColor="#ffffff" bgColor="#6246EA" labelColor="#FFFFFF" />
            </S.ContainerProgressBar>
            <S.ContainerProgressBar>
              <p>JavaScript</p>
              <ProgressBar completed={display ? 86 : 0} baseBgColor="#ffffff" bgColor="#6246EA" labelColor="#FFFFFF" />
            </S.ContainerProgressBar>
            <S.ContainerProgressBar>
              <p>TypeScript</p>
              <ProgressBar completed={display ? 33 : 0} baseBgColor="#ffffff" bgColor="#6246EA" labelColor="#FFFFFF" />
            </S.ContainerProgressBar>
            <S.ContainerProgressBar>
              <p>React</p>
              <ProgressBar completed={display ? 67 : 0} baseBgColor="#ffffff" bgColor="#6246EA" labelColor="#FFFFFF" />
            </S.ContainerProgressBar>
            <S.ContainerProgressBar>
              <p>Node</p>
              <ProgressBar completed={display ? 37 : 0} baseBgColor="#ffffff" bgColor="#6246EA" labelColor="#FFFFFF" />
            </S.ContainerProgressBar>
          </S.Skills>
        </S.ContainerSkills>
      </S.Content>
    </S.Container>
  );
}

export default Skills;
