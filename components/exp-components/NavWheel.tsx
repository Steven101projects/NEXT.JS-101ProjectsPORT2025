import Link from "next/link";

export default function NavWheel() {
  return (
    <div className="wheel flex flex-col text-white justify-center">
      {/* Projects */}
      <Link
        href="/projects"
        className="group relative text-[2vw] mb-[3vw] ml-[2vw] pl-0.5 hover:text-black hover:font-mono transition-all duration-200 transform hover:scale-110 overflow-hidden rounded-md"
      >
        <span className="relative z-10">Projects</span>

        {/* Soft persistent background on hover */}
        <span className="absolute inset-0 bg-gradient-to-r from-gray-200 via-white/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></span>

        {/* Shimmer overlay moving across */}
        <span className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></span>
      </Link>

      {/* About */}
      <Link
        href="/home"
        className="group relative text-[2vw] mb-[3vw] ml-[6vw] hover:font-mono pl-0.5 hover:text-black transition-all duration-200 transform hover:scale-110 overflow-hidden rounded-md"
      >
        <span className="relative z-10">Home</span>
        <span className="absolute inset-0 bg-gradient-to-r from-gray-200 via-white/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></span>
        <span className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></span>
      </Link>

      {/* Services */}
      <Link
        href="/skills"
        className="group relative text-[2vw] mb-[3vw] ml-[6vw] hover:font-mono pl-0.5 hover:text-black transition-all duration-200 transform hover:scale-110 overflow-hidden rounded-md"
      >
        <span className="relative z-10">Skills</span>
        <span className="absolute inset-0 bg-gradient-to-r from-gray-200 via-white/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></span>
        <span className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></span>
      </Link>

      {/* Home */}
      <Link
        href="/"
        className="group relative text-[2vw] ml-[2vw] pl-0.5 hover:font-mono hover:text-black transition-all duration-200 transform hover:scale-110 overflow-hidden rounded-md"
      >
        <span className="relative z-10">1O1 ~</span>
        <span className="absolute inset-0 bg-gradient-to-r from-gray-200 via-white/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></span>
        <span className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></span>
      </Link>
    </div>
  );
}
