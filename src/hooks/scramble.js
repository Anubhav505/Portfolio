import { useEffect } from "react";

const letters = "AbDdEfGhIjKlMnOpQrStUvWxYz";

export function Scramble(className = "hover-scramble") {
  useEffect(() => {
    const elements = document.querySelectorAll(`.${className}`);
    let interval = null;

    const handleMouseOver = (element) => {
      const originalText = element.dataset.value || element.innerText;
      element.dataset.value = originalText;

      let iteration = 0;
      clearInterval(interval);

      interval = setInterval(() => {
        element.innerText = originalText
          .split("")
          .map((_, i) => {
            if (i < iteration) return originalText[i];
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");

        if (iteration >= originalText.length) {
          clearInterval(interval);
        }

        iteration += 1 / 3
      },20);
    };

    elements.forEach((el) => {
      el.addEventListener("mouseenter", () => handleMouseOver(el));
    });

    return () => {
      elements.forEach((el) => {
        el.removeEventListener("mouseenter", () => handleMouseOver(el));
      });
      clearInterval(interval);
    };
  }, [className]);
}
