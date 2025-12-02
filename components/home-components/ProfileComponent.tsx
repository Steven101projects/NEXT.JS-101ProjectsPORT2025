import Image from "next/image";
import Link from "next/link";
import ExternalLinks from "./ExternalLinks";

export default function ProfileComponent() {
  return (
    <div className="w-[48vw] h-[82vh]">
        <ExternalLinks />
     <div className="">
<div className="w-[460px] h-[460px] rounded-full circleImg bg-amber-50 absolute top-[12vh] left-[5vw]">
      </div>
     <div className="absolute bottom-[20vh] right-[59vw]">
  <Image
    src="/conipogi.png"
    alt="Profile"
    width={480}
    height={480}
    quality={100}
    className="object-cover sharp"
  />
</div>
     <div className="flex flex-col gap-4 ">
  <Link href="/projects/#projectsDiv">
    <button
      className=" absolute bottom-[20vh] left-[34vw]
        bg-black
        text-white
        text-xl
        rounded-full
        px-8
        py-4
        shadow-md
        hover:font-mono overflow-hidden hover:border-2 hover:bg-white hover:text-black
        transition
        duration-300
      "
    >
      Recent Projects!
    </button>
  </Link>

  <Link href="/services">
    <button
      className=" absolute bottom-[10vh] left-[30vw]
        bg-black
        text-white
        text-xl
        rounded-full
        px-8
        py-4
        shadow-md
        hover:font-mono overflow-hidden hover:border-2 hover:bg-white hover:text-black
        transition
        duration-300
      "
    >
      Let’s Talk!
    </button>
  </Link>
</div>

     
     </div>
 
    </div>
  );
}
