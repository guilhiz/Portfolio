import React from "react";
import { useProject } from "./hooks";
import projects from "./mock";
import * as S from "./styles";
import arrowLeft from "../../../../assets/arrow-left.png";
import arrowRight from "../../../../assets/arrow-right.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Projects() {
  const { setSwiper, handlerClick } = useProject();
  return (
    <S.Container id="projects">
      <S.Content>
        <h2 data-aos="fade-up">Principais Projetos</h2>
        <S.ContainerCarousel data-aos="fade-up">
          <Swiper
            spaceBetween={50}
            className="carousel"
            grabCursor="true"
            onSwiper={(s) => {
              setSwiper(s);
            }}
            slidesPerView={2}
          >
            {projects.map((p) => (
              <SwiperSlide key={p.title} className="card">
                <S.ProjectTitle>{p.title}</S.ProjectTitle>
                <S.CardText>{p.description}</S.CardText>
                <S.ContainerImg>
                  <img src={p.img} alt="Um gif do projeto" />
                </S.ContainerImg>
                <S.ButtonInfo onClick={() => window.open(p.link, "_blank")}>Saiba mais</S.ButtonInfo>
              </SwiperSlide>
            ))}
          </Swiper>

          <S.ArrowLeft onClick={() => handlerClick("prev")} src={arrowLeft} alt="seta cartão anterior" />

          <S.ArrowRight onClick={() => handlerClick("next")} src={arrowRight} alt="seta proximo cartão" />
        </S.ContainerCarousel>
      </S.Content>
    </S.Container>
  );
}

export default Projects;
