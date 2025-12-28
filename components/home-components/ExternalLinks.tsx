import Link from "next/link";

export default function ExternalLinks() {
  return (
    <div
      className="
        externalLinks
        absolute
        top-[17vh]
        right-[68vw]
        w-[520px]
        h-[520px]
        pointer-events-none
      "
    >
      <svg
        viewBox="0 0 470 460"
        className="externalLinksSvg w-full h-full fill-black text-[22px]"
        style={{ pointerEvents: "none" }}
      >
        <defs>
          <path
            id="leftArc"
            d="M220,380 A230,220 0 0,1 150,0"
          />
        </defs>

        <text
          textAnchor="middle"
          className="externalLinksText tracking-wide"
          style={{ pointerEvents: "auto" }}
        >
          <textPath
            href="#leftArc"
            startOffset="60%"
            style={{ pointerEvents: "auto" }}
          >
            <a
              href="mailto:castroconi101@gmail.com"
              className="externalLinksItem cursor-pointer hover:underline"
              style={{ pointerEvents: "auto" }}
            >
              Email
            </a>

            {"   |   "}

            <a
              href="https://www.linkedin.com/in/nico-steven-castro-5a5285332/"
              target="_blank"
              className="externalLinksItem cursor-pointer hover:underline"
              style={{ pointerEvents: "auto" }}
            >
              LinkedIn
            </a>

            {"   |   "}

            <a
              href="https://github.com/Steven101projects"
              target="_blank"
              className="externalLinksItem cursor-pointer hover:underline"
              style={{ pointerEvents: "auto" }}
            >
              Github
            </a>

            {"   |   "}

            <a
              href="https://www.instagram.com/theultracheese_3/"
              target="_blank"
              className="externalLinksItem cursor-pointer hover:underline"
              style={{ pointerEvents: "auto" }}
            >
              Instagram
            </a>
          </textPath>
        </text>
      </svg>
    </div>
  );
}
