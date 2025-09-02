export default function Skills() {
    return (
        <div className=" flex flex-col justify-center items-center' space-y-4" id="skills">

            <div>
                <h3 className="font-semibold text-gray-400 text-lg">Frontend</h3>
                <ul className="flex flex-wrap gap-2 mt-2 text-xs font-semibold">
                    <li className="skill">HTML</li>
                    <li className="skill">CSS</li>
                    <li className="skill">Tailwind CSS</li>
                    <li className="skill">JavaScript</li>
                    <li className="skill">Typescript</li>
                    <li className="skill">React</li>
                    <li className="skill">Next.js</li>
                    <li className="skill">TanStack Query</li>
                    <li className="skill">GSAP</li>
                    <li className="skill">Three.js</li>
                    <li className="skill">ShadCN</li>
                </ul>
            </div>
           
            <div>
                <h3 className="font-semibold text-gray-400 text-lg">Backend</h3>
                <ul className="flex flex-wrap gap-2 mt-2 text-xs font-semibold">
                    <li className="skill">Node.js</li>
                    <li className="skill">Express.js</li>
                    <li className="skill">Mongoose</li>
                    <li className="skill">REST APIs</li>
                    <li className="skill">Authentication ( JWT, OAuth)</li>
                    <li className="skill">Prisma</li>
                </ul>
            </div>

            <div>
                <h3 className="font-semibold text-gray-400 text-lg">Database</h3>
                <ul className="flex flex-wrap gap-2 mt-2 text-xs font-semibold">
                    <li className="skill">MongoDB</li>
                    <li className="skill">PostgreSQL</li>
                    <li className="skill">MySQL</li>
                </ul>
            </div>

            <div>
                <h3 className="font-semibold text-gray-400 text-lg">Tools</h3>
                <ul className="flex flex-wrap gap-2 mt-2 text-xs font-semibold">
                    <li className="skill">Git</li>
                    <li className="skill">Postman</li>
                    <li className="skill">Docker</li>
                    <li className="skill">CI/CD (Github Actions)</li>
                </ul>
            </div>

        </div>
    );
}
