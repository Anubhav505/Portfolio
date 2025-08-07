import { Github, Linkedin, Mail } from "lucide-react";

export default function Left() {

  return (
    <div
      className='contrast absolute h-screen z-10
        flex flex-col justify-between text-[#1f1f1f] w-1/3 py-30 pl-30
        transition-opacity duration-700 '
    >
      <div className="flex justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="contrast font-extrabold text-6xl">ANUBHAV</h1>
          <div className="flex gap-6">
            <a
              href="https://github.com/Anubhav505"
              target="_blank"
              rel="noreferrer"
            >
              <Github color="#1f1f1f" className="cursor-pointer" />
            </a>
            <a
              href="https://www.linkedin.com/in/anubhavdhruv/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin color="#1f1f1f" className="cursor-pointer" />
            </a>
            <a href="mailto:anubhavdhruv704@gmail.com">
              <Mail color="#1f1f1f" className="cursor-pointer" />
            </a>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
