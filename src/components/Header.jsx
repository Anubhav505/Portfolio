'use client'
import { useEffect, useState } from 'react'
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react'

const sections = ['about', 'skills', 'experience', 'projects']

export default function Header() {
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-10% 0px -70% 0px', // triggers when section is a bit below the top
      threshold: 0.15,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, observerOptions)

    sections.forEach((id) => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])


  return (
    <div className="flex flex-col items-start justify-between lg:h-screen w-full lg:w-1/2 lg:sticky top-0 lg:py-24">
      <div className="space-y-2 w-full">
        <h1 className="text-4xl lg:text-6xl font-bold cursor-pointer">ANUBHAV</h1>
        <h2 className="text-2xl">Full Stack Developer</h2>
        <div className="flex flex-col md:flex-row justify-between lg:justify-start gap-2 lg:gap-6">
          <div className='flex gap-6'>
            <a href="https://github.com/Anubhav505" target="_blank" rel="noreferrer">
              <Github className="cursor-pointer hover:text-[#58ffcf] text-gray-400" />
            </a>
            <a href="https://www.linkedin.com/in/anubhavdhruv/" target="_blank" rel="noreferrer">
              <Linkedin className="cursor-pointer hover:text-[#58ffcf] text-gray-400" />
            </a>
            <a href="mailto:anubhavdhruv704@gmail.com">
              <Mail className="cursor-pointer hover:text-[#58ffcf] text-gray-400" />
            </a>
          </div>
          <div>
            <a href="/Anubhav_resume.pdf" target="_blank" className="flex items-center hover:items-start gap-1 hover:text-[#58ffcf]">
            View Resume<ArrowUpRight size={16} />
          </a>
          </div>
        </div>
      </div>

      <div className="hidden lg:block">
        <ul className="text-[0.9rem] font-semibold flex flex-col gap-4">
          {sections.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`cursor-pointer flex items-center gap-2 group transition-all duration-100 ${activeSection === id ? 'text-[#58ffcf]' : 'text-gray-500 hover:text-[#58ffcf]'
                  }`}
                onClick={e => {
                  e.preventDefault();
                  const el = document.getElementById(id);
                  if (el) {
                    const yOffset = window.innerHeight * 0.14;
                    const y = el.getBoundingClientRect().top + window.pageYOffset - yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                  }
                }}
              >
                <div
                  className={`h-[1px] duration-100 ${activeSection === id
                    ? 'w-16 bg-[#58ffcf]'
                    : 'w-10 bg-gray-500 group-hover:w-16 group-hover:bg-[#58ffcf]'
                    }`}
                ></div>
                {id.toUpperCase()}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className='hidden lg:block'></div>
      <div className='hidden lg:block'></div>
    </div>
  )
}
