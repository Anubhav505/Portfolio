import { useEffect } from "react";

export function useSoundEvents() {
  useEffect(() => {
    const hoverAudio = new Audio("/sound/hover.mp3");
    const clickAudio = new Audio("/sound/click.mp3");

    const handleEvent = (event) => {
      const target = event.target.closest("[data-hover-sound], [data-click-sound]");
      if (!target) return;

      if (event.type === "mouseover" && target.dataset.hoverSound !== undefined) {
        hoverAudio.currentTime = 0;
        hoverAudio.play().catch(() => {});
      } else if (event.type === "click" && target.dataset.clickSound !== undefined) {
        clickAudio.currentTime = 0;
        clickAudio.play().catch(() => {});
      }
    };

    document.addEventListener("mouseover", handleEvent);
    document.addEventListener("click", handleEvent);

    return () => {
      document.removeEventListener("mouseover", handleEvent);
      document.removeEventListener("click", handleEvent);
    };
  }, []);
}
