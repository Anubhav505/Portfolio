import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function Loader({ onComplete }) {
    const barRef = useRef(null);
    const numRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            numRef.current,
            { innerText: 0 },
            {
                innerText: 100,
                duration: 3,
                ease: "sine.inOut",
                snap: { innerText: 1 },
                onUpdate: function () {
                    const val = Math.round(this.targets()[0].innerText);
                    numRef.current.innerText = val;
                    barRef.current.style.width = val + "vw";
                },
                onComplete: () => {
                    console.log("Loading complete");
                    if (onComplete) onComplete();
                },
            }
        );
    }, [onComplete]);


    return (
        <div className="relative h-screen flex bg-[#f1f1f1] gap-4">
            <div ref={barRef}
                className="h-10 bg-black w-0 transition-all duration-200 "></div>

            <div
                className="text-9xl absolute bottom-10 right-10 font-bold text-black ">
                <span ref={numRef}></span><span>%</span>
            </div>
        </div>
    );
}