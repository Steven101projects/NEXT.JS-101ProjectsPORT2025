'use client'
import { useState } from "react";



export default function ExpCenter() {
    const [open, setOpen] = useState(false);

    return (
        <div className="w-[42vw] h-full flex flex-col items-center">
            
            {/* Open Modal Button */}
            <button
    onClick={() => setOpen(true)}
    className="relative right-64
        mt-36 px-7 py-3 rounded-xl
        bg-red-800 text-white text-xl italic 
        shadow-lg cursor-pointer
        transition-transform duration-200 ease-out
        hover:scale-105 active:scale-95
    "
>
                Additional Details...
            </button>

            {/* Modal */}
            {open && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm"
                    onClick={() => setOpen(false)}
                >
                    <div
                        className="relative w-[85vw] max-w-5xl max-h-[80vh] bg-red-950 rounded-2xl p-10 text-white shadow-2xl overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >

                        {/* Content */}
                        <p className="text-2xl leading-relaxed text-pretty">
                            <span className="text-4xl ml-2 italic">My</span> experience in building functional and accessible software began during my college years, when I started learning C#. Although I already had a basic understanding of HTML and CSS from earlier on, college is where I developed a deeper appreciation for the role of IoT, data, and computer networks in modern software systems. While studying, I earned an opportunity to work as a Coding Instructor at Algorithmics Global, where I strengthened my technical skills, particularly my foundation in Python, by teaching students between the ages of 6 and 19. I am already comfortable with visual design and frontend development, making user interface work a strong area for me. As a result, my current focus is on backend development, where I aim to deepen my understanding of system logic, data management, and application architecture as I work toward a full time career as a software engineer.
                        </p>

                        {/* Close */}
                        <button
                            onClick={() => setOpen(false)}
                            className="absolute top-6 right-6 text-xl opacity-70 hover:opacity-100 transition"
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}

              <div className="relative w-[45vw] h-[62vh] border-white border-2 rounded-3xl mt-4 p-10 text-white shadow-2xl overflow-y-auto">
<p className="text-xl relative top-40 leading-relaxed italic">
    Proficient in JavaScript ES6+, HTML5, TailwindCSS, and C# with .NET frameworks, Blending my past experiences on graphic designing and illustrating, I am passionate to building a user experience focused designs on any kind of software.   
</p>
    <div className="relative top-44 text-xl flex gap-6">
<div className="flex gap-4 mt-2">
    
    {/* Resume Button */}
    <a
        href="/Nico_Castro_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
    >
        <button
            className="
                px-6 py-2 rounded-xl 
                bg-black border border-transparent 
                text-white cursor-pointer
                transition-all duration-300
                hover:bg-transparent hover:border-white
                hover:scale-105 active:scale-95
            "
        >
            See My Resume
        </button>
    </a>

    {/* Contact Button */}
    <button
        onClick={() =>
            document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
        }
        className="
            px-7 py-2 rounded-xl 
            bg-black border border-transparent 
            text-white cursor-pointer
            transition-all duration-300
            hover:bg-transparent hover:border-white
            hover:scale-105 active:scale-95
        "
    >
        Contact Me
    </button>

</div>
    </div>
            </div>
        </div>
    );
}
