import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

export default function Header() {
  return (
    <div className="flex flex-col items-start justify-between h-screen sticky top-0 w-1/2 py-24">

      <div className="flex flex-col gap-28">
        <div>
          <h1 className="text-6xl font-bold cursor-pointer">ANUBHAV</h1>
          <p className="text-2xl mt-3">Front End Developer</p>
          <p className=" text-[1rem] text-gray-400 mt-4">
            I build accessible, pixel-perfect digital <br /> experiences for the web.
          </p>
        </div>

        <ul className="text-[0.9rem] font-semibold flex flex-col gap-4">
          <li>
            <a href="#about" className="cursor-pointer flex items-center gap-3 group transition-all duration-100 text-gray-500 hover:text-[#58ffcf]">
              <div className="w-10 h-[1px] bg-gray-500 duration-100 group-hover:w-16 group-hover:bg-[#58ffcf]"></div>
              ABOUT
            </a>
          </li>

          <li>
            <a href="#skills" className="cursor-pointer flex items-center gap-3 group transition-all duration-100 text-gray-500 hover:text-[#58ffcf]">
              <div className="w-10 h-[1px] bg-gray-500 duration-100 group-hover:w-16 group-hover:bg-[#58ffcf]"></div>
              SKILLS
            </a>
          </li>

          <li>
            <a href="#experience" className="cursor-pointer flex items-center gap-3 group transition-all duration-100 text-gray-500 hover:text-[#58ffcf]">
              <div className="w-10 h-[1px] bg-gray-500 duration-100 group-hover:w-16 group-hover:bg-[#58ffcf]"></div>
              EXPERIENCE
            </a>
          </li>

          <li>
            <a href="#projects" className="cursor-pointer flex items-center gap-3 group transition-all duration-100 text-gray-500 hover:text-[#58ffcf]">
              <div className="w-10 h-[1px] bg-gray-500 duration-100 group-hover:w-16 group-hover:bg-[#58ffcf]"></div>
            PROJECTS
            </a>
          </li>
        </ul>
      </div>

      <a href="/Anubhav_resume.pdf" target="_blank" className="flex items-center hover:items-start gap-1 hover:text-[#58ffcf]">View Resume<ArrowUpRight size={16} /> </a>

      <div className="flex gap-6">
        <a
          href="https://github.com/Anubhav505"
          target="_blank"
          rel="noreferrer"
        >
          <Github className="cursor-pointer hover:text-[#58ffcf] text-gray-400" />
        </a>
        <a
          href="https://www.linkedin.com/in/anubhavdhruv/"
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin className="cursor-pointer hover:text-[#58ffcf] text-gray-400" />
        </a>
        <a href="mailto:anubhavdhruv704@gmail.com">
          <Mail className="cursor-pointer hover:text-[#58ffcf] text-gray-400" />
        </a>
      </div>

    </div>
  );
}