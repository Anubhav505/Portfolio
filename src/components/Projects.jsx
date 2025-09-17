import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  return (
    <div className="space-y-4" id="projects">
      {/* Belleblissfashions Project */}
      <div className="hover:bg-[rgba(255,255,255,0.1)] py-3 px-3 rounded-md group space-y-2">
        <a
          className="flex items-center group-hover:items-start group-hover:text-[#58ffcf] text-lg font-semibold"
          href="https://belleblissfashions.com/"
          target="_blank"
        >
          BELLEBLISSFASHIONS – Fashion eCommerce Platform &nbsp;
          <ArrowUpRight size={16} />
        </a>
        <p className="text-gray-400 text-justify text-[1rem]">
          Developed a full-scale <strong>fashion-focused eCommerce site</strong> 
          using Next.js, tailored specifically for apparel and accessories.  
          Implemented secure <strong>Razorpay payments</strong>, cart and 
          order management, and a custom admin panel for uploading new 
          collections and managing inventory.  
          Integrated <strong>GSAP animations</strong> to deliver a premium 
          shopping feel aligned with the client’s luxury fashion brand.
        </p>
        <ul className="flex flex-wrap gap-2 text-xs font-semibold">
          <li className="skill">JavaScript</li>
          <li className="skill">TypeScript</li>
          <li className="skill">Next.js</li>
          <li className="skill">Tailwind CSS</li>
          <li className="skill">GSAP</li>
          <li className="skill">Mongoose</li>
          <li className="skill">Razorpay</li>
          <li className="skill">Embla Carousel</li>
        </ul>
      </div>

      {/* Vandelyn Project */}
      <div className="hover:bg-[rgba(255,255,255,0.1)] py-3 px-3 rounded-md group space-y-2">
        <a
          className="flex items-center group-hover:items-start group-hover:text-[#58ffcf] text-lg font-semibold"
          href="https://vandelyn.com/"
          target="_blank"
        >
          VANDELYN – Lifestyle eCommerce Platform &nbsp;
          <ArrowUpRight size={16} />
        </a>
        <p className="text-gray-400 text-justify text-[1rem]">
          Built a <strong>lifestyle eCommerce platform</strong> for a brand 
          offering a wide product range beyond fashion.  
          Designed an intuitive <strong>category system</strong> for browsing, 
          integrated <strong>secure checkout & tracking</strong>, and 
          customized the admin dashboard for bulk product management.  
          Focused on a clean, minimal UI optimized for performance and 
          scalability to handle growing traffic.
        </p>
        <ul className="flex flex-wrap gap-2 text-xs font-semibold">
          <li className="skill">JavaScript</li>
          <li className="skill">TypeScript</li>
          <li className="skill">Next.js</li>
          <li className="skill">Tailwind CSS</li>
          <li className="skill">GSAP</li>
          <li className="skill">Mongoose</li>
          <li className="skill">Razorpay</li>
          <li className="skill">Embla Carousel</li>
        </ul>
      </div>

      <div className="h-96"></div>
    </div>
  );
}
