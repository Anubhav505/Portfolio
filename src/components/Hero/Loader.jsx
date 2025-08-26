import React, { useEffect, useState } from "react";

function Loader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let start = Date.now();
    let animationFrame;

    function animate() {
      const elapsed = Date.now() - start;
      const percent = Math.min(100, Math.round((elapsed / 1500) * 100));
      setProgress(percent);
      if (percent < 100) {
        animationFrame = requestAnimationFrame(animate);
      }
    }

    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="absolute top-0 bg-black z-50 flex items-center justify-center w-full h-screen">
      <div className="flex flex-col items-center justify-center w-[70vw]">
        <div className="text-white text-3xl font-mono mb-4">{progress}%</div>
        <div className="w-full h-6 border-2 border-white rounded overflow-hidden">
          <div
            className="h-full bg-white transition-all duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}

export default Loader;
