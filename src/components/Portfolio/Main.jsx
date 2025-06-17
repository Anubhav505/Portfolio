import About from "./About";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";

export default function Main() {
    return (
        <div className="w-1/2 overflow-hidden flex flex-col gap-24">
            <About />
            <Skills />
            <Experience />
            <Projects /> 
        </div>
    );
}