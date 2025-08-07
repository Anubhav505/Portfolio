import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";
import Scene from "./ThreeJs/Scene";
import Left from "./Left";
import Right from "./Right";

export default function Hero() {
  const parentRef = useRef();
  const navigate = useNavigate();
  
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
  
  return (
    <div ref={parentRef} className="h-screen w-full flex">
      <Left />
      <Scene triggerRef={parentRef} onNavigate={handleNavigateToPortfolio} />
      <Right />
    </div>
  );
}