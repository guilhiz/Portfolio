import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const useProject = () => {
  const [swiper, setSwiper] = useState(undefined);
  const handlerClick = (direction) => {
    if (direction === "next") {
      swiper.slideNext();
      return;
    }
    swiper.slidePrev();
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return {setSwiper, handlerClick};
};
