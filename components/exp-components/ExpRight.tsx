export default function ExpRight() {
    return (
        <section
            id="rightSide"
            className="w-[35vw] flex flex-col mt-[2vh]"
        >
            <p
                id="header"
                className="relative right-8 text-[4vw] font-serif italic mb-[1vh]"
            >
                Nico Steven Castro
            </p>

            <div
                id="Contacts"
                className="relative right-5 text-[4vh] leading-relaxed flex flex-col items-center space-y-2 mb-6"
            >
                <div>
                    <p>
                        <span className="font-bold text-white">EMAIL:</span>{" "}
                        <a
                            href="mailto:castroconi101@gmail.com"
                            className="hover:underline transition duration-300"
                        >
                            castroconi101@gmail.com
                        </a>
                    </p>
                    <p>
                        <span className="font-bold text-white">PHONE:</span>{" "}
                        <a
                            href="tel:+14374451436"
                            className="hover:underline transition duration-300"
                        >
                            +1 437 445 1436
                        </a>
                    </p>
                </div>
            </div>

            {/* Card 1 */}
            <div className="group w-[30vw] ml-[5vh] mt-4 perspective">
                <div className="relative h-[14vh] w-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                    <div className="absolute cursor-crosshair inset-0 bg-red-800 rounded-3xl shadow-md flex flex-col items-center justify-center backface-hidden">
                        <p className="italic text-[3vh] text-white font-semibold">
                            Coding Languages
                        </p>
                        <p className="text-[2.8vh] text-white">
                            TypeScript · JavaScript · HTML · C# · Python
                        </p>
                    </div>

                    <div className="absolute cursor-crosshair inset-0 bg-red-800 rounded-3xl shadow-md flex items-center justify-center backface-hidden rotate-y-180 px-6">
                        <p className="text-[2.6vh] text-white italic text-center">
                            Strong foundation across frontend and backend languages
                        </p>
                    </div>
                </div>
            </div>

            {/* Card 2 */}
            <div className="group w-[30vw] ml-[5vh] mt-6 perspective">
                <div className="relative h-[14vh] w-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                    <div className="absolute cursor-crosshair inset-0 bg-red-800 rounded-3xl shadow-md flex flex-col items-center justify-center backface-hidden">
                        <p className="italic text-[3vh] text-white font-semibold">
                            Frameworks and Tools
                        </p>
                        <p className="text-[2.8vh] text-white">
                            React · Next.js · Docusaurus
                        </p>
                    </div>

                    <div className="absolute inset-0 bg-red-800 rounded-3xl shadow-md flex items-center justify-center backface-hidden rotate-y-180 px-6">
                        <p className="text-[2.6vh] text-white italic text-center">
                            Focused on modern component based development
                        </p>
                    </div>
                </div>
            </div>

            {/* Card 3 */}
            <div className="group w-[30vw] ml-[5vh] mt-6 perspective">
                <div className="relative h-[14vh] w-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                    <div className="absolute cursor-crosshair inset-0 bg-red-800 rounded-3xl shadow-md flex flex-col items-center justify-center backface-hidden">
                        <p className="italic text-[3vh] text-white font-semibold">
                            Stacks
                        </p>
                        <p className="text-[2.8vh] text-white">
                            MERN (MongoDB, Express, React+Vite, Node.js)
                        </p>
                    </div>

                    <div className="absolute inset-0 bg-red-800 rounded-3xl shadow-md flex items-center justify-center backface-hidden rotate-y-180 px-6">
                        <p className="text-[2.6vh] text-white italic text-center">
                            End to end full stack application experience
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
