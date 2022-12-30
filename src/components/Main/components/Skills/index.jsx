import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
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
            <S.ContainerProgressBar>
              <p>HTML/CSS</p>
              <ProgressBar
                completed={95}
                baseBgColor="#ffffff"
                bgColor="#6246EA"
                labelColor="#FFFFFF"
                animateOnRender
              />
            </S.ContainerProgressBar>
            <S.ContainerProgressBar>
              <p>JavaScript</p>
              <ProgressBar
                completed={86}
                baseBgColor="#ffffff"
                bgColor="#6246EA"
                labelColor="#FFFFFF"
                animateOnRender
              />
            </S.ContainerProgressBar>
            <S.ContainerProgressBar>
              <p>TypeScript</p>
              <ProgressBar
                completed={33}
                baseBgColor="#ffffff"
                bgColor="#6246EA"
                labelColor="#FFFFFF"
                animateOnRender
              />
            </S.ContainerProgressBar>
            <S.ContainerProgressBar>
              <p>React</p>
              <ProgressBar
                completed={67}
                baseBgColor="#ffffff"
                bgColor="#6246EA"
                labelColor="#FFFFFF"
                animateOnRender
              />
            </S.ContainerProgressBar>
            <S.ContainerProgressBar>
              <p>Node</p>
              <ProgressBar
                completed={37}
                baseBgColor="#ffffff"
                bgColor="#6246EA"
                labelColor="#FFFFFF"
                animateOnRender
              />
            </S.ContainerProgressBar>
          </S.Skills>
        </S.ContainerSkills>
      </S.Content>
    </S.Container>
  );
}

export default Skills;
