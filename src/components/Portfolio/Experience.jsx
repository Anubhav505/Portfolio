import { ArrowUpRight } from 'lucide-react';

export default function Experience() {
    return (
        <div className='hover:bg-[rgba(255,255,255,0.1)] py-2 px-2 rounded-md group space-y-2' id='experience'>
            <a className='flex items-center group-hover:items-start group-hover:text-[#58ffcf] text-lg font-semibold   ' href="https://1buy.ai/" target="_blank" >FullStack Developer Intern, 1BUY.AI &nbsp;<ArrowUpRight size={16} /></a>
            <p className='text-gray-400 text-justify text-[1rem]'>
                Develop and deliver responsive, high-quality frontend features while integrating backend APIs to enable seamless data interaction. Collaborate with backend developers to ensure robust, scalable solutions in a fast-paced production environment.
            </p>
            <ul className='flex flex-wrap gap-2 text-xs font-semibold'>
                <li className='skill'>JavaScript</li>
                <li className='skill'>HTML</li>
                <li className='skill'>CSS</li>
                <li className='skill'>Next.js</li>
                <li className='skill'>TanStack Query</li>
                <li className='skill'>Tailwind CSS</li>
            </ul>

        </div>
    )
}