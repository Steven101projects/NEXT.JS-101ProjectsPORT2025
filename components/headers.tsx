import Link from 'next/link';
import { JSX } from 'react';

function HomeHeader(){
 return (
    <>
    <header className="flex justify-between items-center pr-[60px]">
      {/* Left side title */}
      <Link href="/" className="px-2 py-1 text-8xl">
        1O1~
      </Link>

      {/* Right side content */}
      <div className="flex items-center justify-end space-x-10">
        {/* Navigation */}
        <nav className="flex items-center space-x-2 text-[23px]">
          <Link
            href="/skills"
            className="hover:underline hover:font-semibold transition-all duration-300"
          >
            Skills
          </Link>
          <span>|</span>
          <Link
            href="/experience"
            className="hover:underline hover:font-semibold transition-all duration-300"
          >
            Experience
          </Link>
          <span>|</span>
          <Link
            href="/projects"
            className="hover:underline hover:font-semibold transition-all duration-300"
          >
            Projects
          </Link>
        </nav>

        {/* Keep your SERVICES part unchanged */}
        <p className="px-2 py-1 text-7xl">HOME</p>
      </div>
    </header>
  <hr className="border-gray-300 mb-3 w-10/12 ml-52" />
    </>
 )
}

function SkillsHeader(){
 return (
    <>
    <header className="flex justify-between items-center mt-[8px] pr-[60px]">
      {/* Left side title */}
      <Link href="/" className="px-2 py-1 text-8xl">
        1O1~
      </Link>

      {/* Right side content */}
      <div className="flex items-center justify-end space-x-10">
        {/* Navigation */}
        <nav className="flex items-center space-x-2 text-[23px]">
          <Link
            href="/home"
            className="hover:underline hover:font-semibold transition-all duration-300"
          >
            Home
          </Link>
          <span>|</span>
          <Link
            href="/experience"
            className="hover:underline hover:font-semibold transition-all duration-300"
          >
            Experience
          </Link>
          <span>|</span>
          <Link
            href="/projects"
            className="hover:underline hover:font-semibold transition-all duration-300"
          >
            Projects
          </Link>
        </nav>
        <p className="px-2 py-1 text-7xl">SKILLS</p>
      </div>
    </header>
  <hr className="border-gray-300 mb-3 w-10/12 ml-52" />
    </>
 )
}

function ProjectsHeader(){
 return (
    <>
     <header className="flex justify-between items-center mt-[8px] pr-[60px]">
          <Link href="/" className="px-2 py-1 text-7xl">
            1O1 ~
          </Link>

      <nav className="flex items-center space-x-2 text-[23px]">
        <Link
          href="/home"
          className="hover:underline hover:font-semibold transition-all duration-300"
        >
          Home
        </Link>
        <span>|</span>
        <Link
          href="/services"
          className="hover:underline hover:font-semibold transition-all duration-300"
        >
          Skills
        </Link>
        <span>|</span>
        <Link
          href="/experience"
          className="hover:underline hover:font-semibold transition-all duration-300"
        >
          Experience
        </Link>
      </nav>
    </header>
       </>
 )
}

type HeaderPage = "home" | "skills" | "projects";

const headers: Record<HeaderPage, JSX.Element> = {
  home: <HomeHeader />,
  skills: <SkillsHeader />,
  projects: <ProjectsHeader />
};

export default function Header({ page }: { page: HeaderPage }) {
  return headers[page];
}