import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import projects from "./mock";
import * as S from "./styles";

function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <S.Container id="projects">
      <S.Content>
        <h2 data-aos="fade-up">Principais Projetos</h2>
        <S.ContainerCarousel data-aos="fade-up">
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
