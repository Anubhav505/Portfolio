import { useRef, useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";
import Scene from "./ThreeJs/Scene";
import Left from "./Left";
import Right from "./Right";
import Loader from "./Loader";

import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const parentRef = useRef();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [modelLoaded, setModelLoaded] = useState(false);
  const [minTimePassed, setMinTimePassed] = useState(false);

  useEffect(() => {
    return () => {
      ScrollTrigger.killAll();
    };
  }, []);

  const handleNavigateToPortfolio = () => {
    ScrollTrigger.killAll();
    window.scrollTo(0, 0);
    navigate("/portfolio");
  };

  const handleModelLoaded = () => {
    setModelLoaded(true);
  };

  // Start 1.5-second timer when component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setMinTimePassed(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Ensure loader shows for at least 1.5 seconds
  useEffect(() => {
    if (modelLoaded && minTimePassed) {
      setLoading(false);
    }
  }, [modelLoaded, minTimePassed]);

  // Disable scrolling while loader is active
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [loading]);

  return (
    <div ref={parentRef} className="h-[200vh] w-full flex relative">
      {!loading ? null : <Loader />}
      <Left />
      <Scene
        triggerRef={parentRef}
        onNavigate={handleNavigateToPortfolio}
        onModelLoaded={handleModelLoaded}
      />
      <Right />
      {/* Add a spacer to ensure scrollable area */}
      <div className="absolute bottom-0 w-full h-[100vh] pointer-events-none select-none" />
    </div>
  );
}
