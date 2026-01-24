"use client";

import { useState, useEffect } from "react";
import projects from "@/app/data/projects";

export default function ProjectCarousel3D() {
  const [position, setPosition] = useState(3);
  const [selected, setSelected] = useState(null);
  const [isSmall, setIsSmall] = useState(false);

  const total = projects.length;

  useEffect(() => {
    const check = () => setIsSmall(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const CARD_W = isSmall ? 220 : 850;
  const CARD_H = isSmall ? 300 : 450;
  const GAP = isSmall ? 20 : 40;
  const CTRLS_H = 40;

  const moveLeft = () => setPosition((p) => (p > 1 ? p - 1 : total));
  const moveRight = () => setPosition((p) => (p < total ? p + 1 : 1));

  return (
    <>
      <div className="relative w-full overflow-x-hidden select-none bg-white">
        <div
          className="relative w-full grid"
          style={{
            height: `${CARD_H + CTRLS_H}px`,
            gridTemplateRows: `${CARD_H}px ${CTRLS_H}px`,
            gridTemplateColumns: "1fr repeat(5,30px) 1fr",
            alignItems: "center",
            justifyItems: "center"
          }}
        >
          <main
            className="flex items-center justify-center mx-auto relative"
            style={{
              gridRow: "1 / 2",
              gridColumn: "1 / 8",
              width: "100%",
              height: `${CARD_H}px`,
              transformStyle: "preserve-3d",
              perspective: isSmall ? "380px" : "600px",
              "--items": total,
              "--position": position,
              pointerEvents: "none"
            }}
          >
            {projects.map((p, i) => (
              <div
                key={p.id}
                className="item relative overflow-hidden rounded-2xl shadow-xl border bg-white transition-all duration-300 cursor-pointer"
                onClick={() => setSelected(p)}
                style={{
                  position: "absolute",
                  width: `${CARD_W}px`,
                  height: `${CARD_H}px`,
                  "--offset": i + 1,
                  "--r": `calc(var(--position) - var(--offset))`,
                  transform: `rotateY(calc(-6deg * var(--r)))
                              translateX(calc(-${CARD_W + GAP}px * var(--r)))`,
                  zIndex: `calc((var(--position) - abs(var(--r))))`,
                  pointerEvents: "auto"
                }}
              >
                <div className="relative w-full h-2/3 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="absolute bottom-0 left-0 w-full p-5">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {p.title}
                  </h3>
                  <p className="text-gray-700 mt-1 text-sm">
                    {p.description}
                  </p>
                </div>
              </div>
            ))}

            <div
              className="absolute inset-0 flex pointer-events-auto"
              style={{ height: `${CARD_H}px` }}
            >
              <div
                onClick={moveLeft}
                className="w-1/2 h-full cursor-pointer"
              />
              <div
                onClick={moveRight}
                className="w-1/2 h-full cursor-pointer"
              />
            </div>
          </main>
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-6"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-3xl shadow-2xl p-10 md:p-14 w-full max-w-5xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-5 text-xl text-gray-600 hover:text-black"
            >
              ×
            </button>

            <div className="flex flex-col md:flex-row gap-10">

              {/* Left */}
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-semibold mb-4 text-gray-900">
                  {selected.title}
                </h2>

                <p className="text-gray-600 mb-8 leading-relaxed">
                  {selected.description}
                  {selected.link}
                </p>

                <div className="bg-gray-50 rounded-2xl p-6 mb-6 border">
                  <h3 className="text-lg font-semibold mb-3">Design</h3>
                  <p className="text-gray-700 mb-3">
                    {selected.design?.approach || "Coming soon"}
                  </p>

                  {selected.design?.canvaLink && (
                    <a
                      href={selected.design.canvaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 border rounded-lg text-sm hover:bg-gray-100"
                    >
                      View Canva Design
                    </a>
                  )}
                </div>

                <div className="bg-gray-50 rounded-2xl p-6 border">
                  <h3 className="text-lg font-semibold mb-3">Documentation</h3>

                  <div className="flex flex-col gap-3">
                    {selected.documentation?.githubLink && (
                      <a
                        href={selected.documentation.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 border rounded-lg text-sm hover:bg-gray-100"
                      >
                        GitHub Repository
                      </a>
                    )}

                    {selected.documentation?.googleDocsLink && (
                      <a
                        href={selected.documentation.googleDocsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 border rounded-lg text-sm hover:bg-gray-100"
                      >
                        Google Docs
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Right */}
              <div className="w-full md:w-1/2">
                <div className="w-full h-72 md:h-96 rounded-2xl overflow-hidden border shadow-sm">
                  <img
                    src={selected.image}
                    alt={selected.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
}
