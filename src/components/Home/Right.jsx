import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function Right() {
  const [faded, setFaded] = useState(false);

  const handleExploreClick = () => {
    setFaded(true);
    window.dispatchEvent(new Event("exploreClicked"));
  };

  return (
    <div
      className={`absolute h-screen right-0
        flex flex-col justify-center w-1/3 py-30 pr-30 transition-opacity duration-700
        ${faded ? "opacity-0 pointer-events-none" : "opacity-100"}
 /    `}
    >
      <h1 className="text-gray-700 text-lg font-medium mb-2 tracking-widest uppercase">
        Hi, I'm a
      </h1>
      <h2 className="text-5xl font-bold text-gray-900 mb-5 leading-tight">
        <span className="inline-block border-b-4 border-blue-500 pb-2">
          Front-End Developer
        </span>
      </h2>
      <p className="text-gray-700 text-lg mb-2 font-normal">
        Crafting clean, accessible, and modern web experiences.
      </p>
      <p className="text-gray-400 text-base mb-12">
        Let's build something exceptional together.
      </p>
      <button
        className="hover-sound explore px-8 py-3 cursor-pointer self-start bg-blue-600 hover:bg-blue-700 text-white rounded-full"
        onClick={handleExploreClick}
      >
        <span className="tracking-wide text-base font-semibold flex gap-2">
          Explore
          <ArrowRight className="relative left-1 animate-arrow-bounce" />
        </span>
      </button>
    </div>
  );
}
