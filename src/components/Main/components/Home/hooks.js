import { useState, useEffect, useRef } from "react";
import CLOUDS from "vanta/dist/vanta.clouds.min";
import * as THREE from "three";

export const useVanta = () => {
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

  return { vantaRef };
};
