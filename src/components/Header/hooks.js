import { useEffect, useState } from "react";

export const useScroll = () => {
  const [small, setSmall] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => setSmall(window.pageYOffset > 80));
    }
  }, []);

  return { small };
};
