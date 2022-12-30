import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import projects from "./mock";
import * as S from "./styles";

function Projects() {
  return (
    <S.Container id="projects">
      <S.Content>
        <h2>Principais Projetos</h2>
        <S.ContainerCarousel>
          <Swiper spaceBetween={30} slidesPerView={2} slidesPerGroup={2} className="carousel" grabCursor="true">
            {projects.map((p) => (
              <SwiperSlide key={p.title} className="card">
                <S.ProjectTitle>{p.title}</S.ProjectTitle>
                <p>{p.description}</p>
                <S.ContainerImg>
                  <img src={p.img} alt="Um gif do projeto" />
                </S.ContainerImg>
                <S.ButtonInfo onClick={() => window.open(p.link, "_blank")}>Saiba mais</S.ButtonInfo>
              </SwiperSlide>
            ))}
          </Swiper>
        </S.ContainerCarousel>
      </S.Content>
    </S.Container>
  );
}

export default Projects;
