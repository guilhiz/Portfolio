import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const useSkills = () => {
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => window.pageYOffset > 360 && setDisplay(true));
    }
  }, []);

  return {
    display,
  };
};
