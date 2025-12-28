import Link from "next/link";

export default function TitleCardPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-6 sm:space-y-8 bg-white text-black">
      
      {/* Title Card */}
      <div id="titleCard">
        <div className="flex items-center justify-center gap-2 sm:gap-3 relative top-6 sm:top-9">
          <p className="text-base sm:text-xl ml-4 sm:ml-12">
            (Nico Castro’s)
          </p>

          <h1 className="text-[5rem] sm:text-[11rem] font-light leading-none ml-0 sm:ml-[8vw]">
            1O1
          </h1>
        </div>

<h2 className='text-[3.5rem] sm:text-[8rem] font-[Helvetica,"Arial",sans-serif] leading-none mt-4 sm:mt-0 sm:-mb-3'>
          .projects
        </h2>
      </div>

      {/* Navigation */}
      <nav className="text-lg sm:text-[2rem] space-x-1">
        <span>|</span>
        <Link
          href="/home"
          className="px-2 py-1 hover:bg-black hover:text-white transition-colors duration-200"
        >
          Home
        </Link>
        <span>|</span>
        <Link
          href="/experience"
          className="px-2 py-1 hover:bg-black hover:text-white transition-colors duration-200"
        >
          Experience
        </Link>
        <span>|</span>
        <Link
          href="/skills"
          className="px-2 py-1 hover:bg-black hover:text-white transition-colors duration-200"
        >
          Skills
        </Link>
        <span>|</span>
        <Link
          href="/projects"
          className="px-2 py-1 hover:bg-black hover:text-white transition-colors duration-200"
        >
          Projects
        </Link>
        <span>|</span>
      </nav>

      {/* Contact Info */}
      <div id="contacts" className="text-sm sm:text-lg text-black mt-2 space-y-1">
        <p>
          EMAIL{" "}
          <a
            href="mailto:castroconi101@gmail.com"
            className="hover:underline underline-offset-2"
          >
            castroconi101@gmail.com
          </a>
        </p>
        <p>PHONE +1 437 445 1436</p>
      </div>
    </div>
  );
}
