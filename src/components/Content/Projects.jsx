import { ArrowUpRight } from "lucide-react";

export default function Projects() {
    return (
        <div className="space-y-2" id="projects">
            <div className=' hover:bg-[rgba(255,255,255,0.1)] py-2 px-2 rounded-md group space-y-2'>
                <a className='flex items-center group-hover:items-start group-hover:text-[#58ffcf] text-lg font-semibold   ' href="https://1buy.ai/" target="_blank" >VENDALYN - AN ECOMMERCE PLATFORM &nbsp;<ArrowUpRight size={16} /></a>
                <p className='text-gray-400 text-justify text-[1rem]'>
                    I developed a complete eCommerce platform using Next.js with features like secure payment gateway integration, add-to-cart functionality, and an order tracking system. I built an admin panel for managing products and creating custom categories, giving full control over the store. To enhance user experience, I integrated GSAP animations for smooth and engaging interactions. This project highlights my ability to build scalable, real-world applications with both user-facing and admin-side functionality.
                </p>
                <ul className='flex flex-wrap gap-2 text-xs font-semibold'>
                    <li className='skill'>JavaScript</li>
                    <li className='skill'>Typescript</li>
                    <li className='skill'>HTML</li>
                    <li className='skill'>CSS</li>
                    <li className='skill'>Next.js</li>
                    <li className='skill'>Tailwind CSS</li>
                    <li className='skill'>GSAP</li>
                    <li className='skill'>Mongoose</li>
                    <li className='skill'>Razorpay</li>
                    <li className='skill'>Embala Carousel</li>
                </ul>
            </div>

            <div className="h-96"></div>
        </div>
    )
}
