"use client";

import Link from 'next/link'
import ProjectCarousel from "./ProjectsCarousel"
import AllProjectsGrid from './AllProjectsGrid'


interface ProjectProps {
  setShowAll: (value: boolean) => void;
}

export function RecentProjects({ setShowAll }: ProjectProps) {
  return (
    <div id="recent" className="text-center">
    <div id="header" className="text-center my-10">
  <hr className="border-black mb-3 w-11/12 mx-auto" />

  <div className="flex justify-around items-center w-11/12 mx-auto text-xl">
    <Link href="https://github.com" className="hover:text-blue-800 transition-colors underline italic">
      Github
    </Link>
    <p className="text-[12vh] italic tracking-wide text-black mb-3">
      RECENT PROJECTS
    </p>
    <Link href="/blogs" className="hover:text-blue-800 transition-colors underline italic">
      Blogs
    </Link>
  </div>
 <hr className="border-black mb-3 w-11/12 mx-auto" />
</div>
<button
        onClick={() => setShowAll(true)}
        className="text-lg relative bottom-5 hover:text-blue-800 transition-colors underline"
      >
        View All Projects
      </button>
<div id="showProjs">
<ProjectCarousel />
</div>
    </div>
  );
}

export function ViewAllProjects({ setShowAll }: ProjectProps) {
  return (
    <div id="all" className="text-center">
<div id="header" className="text-center my-10">
 <hr className="border-black mb-3 w-11/12 mx-auto" />

  <div className="flex justify-around items-center w-11/12 mx-auto text-lg">
    <Link href="https://github.com" className="hover:text-blue-800 transition-colors underline italic">
      Github
    </Link>
    <p className="text-[10vh] font-mono italic tracking-wide text-black mb-3 ">
      ALL 1O1:PROJECTS
    </p>

    <Link href="/blogs" className="hover:text-blue-800 transition-colors underline italic">
      Blogs
    </Link>
  </div>

 <hr className="border-black mb-3 w-11/12 mx-auto" />
</div>
<div id="showProjs">
<AllProjectsGrid />
</div>

<button
  onClick={() => setShowAll(false)}
  className="mt-4 mb-3.5 text-black text-lg hover:text-gray-700 underline transition duration-200"
>
  Back to Recent Projects
</button>
    </div>
  );
}
