import Image from "next/image";
import Link from "next/link";
import ExternalLinks from "./ExternalLinks";
import ExternalLinksMobile from "./ELMobile";

export default function ProfileComponent() {
  return (
    <div className="profileContainer w-[48vw] h-[82vh]">
      <ExternalLinks />
      <ExternalLinksMobile />

      <div className="profileInner">
        <div className="profileCircle w-[460px] h-[460px] rounded-full circleImg bg-amber-50 absolute top-[12vh] left-[5vw]">
        </div>

        <div className="profileImageWrapper absolute bottom-[20vh] right-[59vw]">
          <Image
            src="/conipogi.png"
            alt="Profile"
            width={480}
            height={480}
            quality={100}
            className="object-cover sharp"
          />
        </div>

        <div className="profileButtons flex flex-col gap-4">
          <Link href="/projects/#projectsDiv">
            <button
              className="
                profileButtonPrimary
                absolute bottom-[20vh] left-[34vw]
                bg-black text-white text-xl
                rounded-full px-8 py-4
                shadow-md
                hover:font-mono overflow-hidden
                hover:border-2 hover:bg-white hover:text-black
                transition duration-300
              "
            >
              Recent Projects!
            </button>
          </Link>

          <Link href="/skills">
            <button
              className="
                profileButtonSecondary
                absolute bottom-[10vh] left-[30vw]
                bg-black text-white text-xl
                rounded-full px-8 py-4
                shadow-md
                hover:font-mono overflow-hidden
                hover:border-2 hover:bg-white hover:text-black
                transition duration-300
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
