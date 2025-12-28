import Link from "next/link";
import { JSX } from "react";

function HomeHeader() {
  return (
    <>
      <header className="portfolio-header flex justify-between items-center pr-[60px]">
        {/* Left side title */}
        <Link href="/" className="portfolio-logo px-2 py-1 text-8xl">
          1O1~
        </Link>

        {/* Right side content */}
        <div className="portfolio-header-right flex items-center justify-end space-x-10">
          {/* Navigation */}
          <nav className="portfolio-nav flex items-center space-x-2 text-2xl">
            <Link
              href="/skills"
              className="portfolio-nav-link hover:underline hover:font-semibold transition-all duration-300"
            >
              Skills
            </Link>
            <span className="portfolio-nav-separator">|</span>
            <Link
              href="/experience"
              className="portfolio-nav-link hover:underline hover:font-semibold transition-all duration-300"
            >
              Experience
            </Link>
            <span className="portfolio-nav-separator">|</span>
            <Link
              href="/projects"
              className="portfolio-nav-link hover:underline hover:font-semibold transition-all duration-300"
            >
              Projects
            </Link>
          </nav>

          <p className="portfolio-page-label px-2 py-1 text-7xl">HOME</p>
        </div>
      </header>

      <hr className="portfolio-header-divider border-gray-300 mb-3 w-10/12 ml-52" />
    </>
  );
}

function SkillsHeader() {
  return (
    <>
      <header className="portfolio-header bg-white w-full fixed top-0 z-50 flex justify-between items-center pr-[60px]">
        {/* Left side title */}
        <Link href="/" className="portfolio-logo px-2 py-1 text-8xl">
          1O1~
        </Link>

        {/* Right side content */}
        <div className="portfolio-header-right flex items-center justify-end space-x-10">
          {/* Navigation */}
          <nav className="portfolio-nav flex items-center space-x-2 text-[23px]">
            <Link
              href="/home"
              className="portfolio-nav-link hover:underline hover:font-semibold transition-all duration-300"
            >
              Home
            </Link>
            <span className="portfolio-nav-separator">|</span>
            <Link
              href="/experience"
              className="portfolio-nav-link hover:underline hover:font-semibold transition-all duration-300"
            >
              Experience
            </Link>
            <span className="portfolio-nav-separator">|</span>
            <Link
              href="/projects"
              className="portfolio-nav-link hover:underline hover:font-semibold transition-all duration-300"
            >
              Projects
            </Link>
          </nav>

          <p className="portfolio-page-label px-2 py-1 text-7xl">SKILLS</p>
        </div>
      </header>
    </>
  );
}

function ProjectsHeader() {
  return (
    <>
      <header className="portfolio-header flex justify-between items-center mt-[8px] pr-[60px]">
        <Link href="/" className="portfolio-logo px-2 py-1 text-7xl">
          1O1 ~
        </Link>

        <nav className="portfolio-nav flex items-center space-x-2 text-[23px]">
          <Link
            href="/home"
            className="portfolio-nav-link hover:underline hover:font-semibold transition-all duration-300"
          >
            Home
          </Link>
          <span className="portfolio-nav-separator">|</span>
          <Link
            href="/skills"
            className="portfolio-nav-link hover:underline hover:font-semibold transition-all duration-300"
          >
            Skills
          </Link>
          <span className="portfolio-nav-separator">|</span>
          <Link
            href="/experience"
            className="portfolio-nav-link hover:underline hover:font-semibold transition-all duration-300"
          >
            Experience
          </Link>
        </nav>
      </header>
    </>
  );
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
