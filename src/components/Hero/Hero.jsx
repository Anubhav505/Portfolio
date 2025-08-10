
import { useRef, useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";
import Scene from "./ThreeJs/Scene";
import Left from "./Left";
import Right from "./Right";
import Loader from "../Loader";

export default function Hero() {
  const parentRef = useRef();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    return () => {
      ScrollTrigger.killAll();
    };
  }, []);

  const handleNavigateToPortfolio = () => {
    ScrollTrigger.killAll();
    window.scrollTo(0, 0);
    navigate('/portfolio');
  };

  // Callback to hide loader when model is loaded
  const handleModelLoaded = () => setLoading(false);

  return (
    <div ref={parentRef} className="h-screen w-full flex">
      {loading && <Loader />}
      <Left />
      <Scene triggerRef={parentRef} onNavigate={handleNavigateToPortfolio} onModelLoaded={handleModelLoaded} />
      <Right />
    </div>
  );
}