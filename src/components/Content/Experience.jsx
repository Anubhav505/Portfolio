import { ArrowUpRight } from 'lucide-react';

export default function Experience() {
    return (
        <div className='space-y-4 ' id='experience'>

            <div className=' hover:bg-[rgba(255,255,255,0.1)] py-2 px-2 rounded-md group space-y-2'>
                <a className='flex items-center group-hover:items-start group-hover:text-[#58ffcf] text-lg font-semibold   ' href="https://1buy.ai/" target="_blank" >Software Developer Intern, 1BUY.AI &nbsp;<ArrowUpRight size={16} /></a>
                <p className='text-gray-400 text-justify text-[1rem]'>
                    Design and develop end-to-end web applications by building responsive, high-quality frontend interfaces and implementing backend services using Node.js/Express with databases like MongoDB and MySQL. Collaborate across the stack to deliver scalable, secure, and production-ready solutions.
                </p>
                <ul className='flex flex-wrap gap-2 text-xs font-semibold'>
                    <li className='skill'>JavaScript</li>
                    <li className='skill'>Typescript</li>
                    <li className='skill'>HTML</li>
                    <li className='skill'>CSS</li>
                    <li className='skill'>Next.js</li>
                    <li className='skill'>TanStack Query</li>
                    <li className='skill'>Tailwind CSS</li>
                </ul>
            </div>

            <div className=' hover:bg-[rgba(255,255,255,0.1)] py-2 px-2 rounded-md group space-y-2'>
                <a className='flex items-center group-hover:items-start group-hover:text-[#58ffcf] text-lg font-semibold  ' href="https://www.guardantsecurity.com/" target="_blank" >Software Developer Intern, Guardant Security &nbsp;<ArrowUpRight size={16} /></a>
                <p className='text-gray-400 text-justify text-[1rem]'>
                    Built a responsive static website for a manpower provider company, handling full frontend design and development. Integrated MailJS for automated email workflows, ensuring seamless communication and a professional user experience.
                </p>
                <ul className='flex flex-wrap gap-2 text-xs font-semibold'>
                    <li className='skill'>JavaScript</li>
                    <li className='skill'>Typescript</li>
                    <li className='skill'>HTML</li>
                    <li className='skill'>CSS</li>
                    <li className='skill'>Next.js</li>
                    <li className='skill'>TanStack Query</li>
                    <li className='skill'>Tailwind CSS</li>
                </ul>

            </div>

        </div>
    )
}