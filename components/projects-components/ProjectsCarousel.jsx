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

  // slightly smaller on mobile
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
            justifyItems: "center",
            overflow: "visible",
          }}
        >
          <main
            id="carousel"
            className="flex items-center justify-center mx-auto relative"
            style={{
              gridRow: "1 / 2",
              gridColumn: "1 / 8",
              width: "100%",
              height: `${CARD_H}px`,
              transformStyle: "preserve-3d",
              perspective: isSmall ? "380px" : "600px",
              "--items": total,
              "--middle": 3,
              "--position": position,
              pointerEvents: "none",
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
                  transformOrigin: "50% 50%",
                  "--offset": i + 1,
                  "--r": `calc(var(--position) - var(--offset))`,
                  "--abs": `max(calc(var(--r) * -1), var(--r))`,
                  transform: `rotateY(calc(-6deg * var(--r)))
                              translateX(calc(-${CARD_W + GAP}px * var(--r)))`,
                  zIndex: `calc((var(--position) - var(--abs)))`,
                  pointerEvents: "auto",
                }}
              >
                <div className="relative w-full h-2/3 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="absolute bottom-0 left-0 w-full p-5 flex justify-between items-end">
                  <div className="max-w-[70%] text-left">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {p.title}
                    </h3>
                    <p className="text-gray-700 mt-1 text-sm">
                      {p.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <div
              className="absolute inset-0 flex pointer-events-auto"
              style={{ height: `${CARD_H}px` }}
            >
              <div
                onClick={moveLeft}
                className="w-1/2 h-full cursor-pointer bg-transparent hover:bg-gradient-to-r hover:from-black/10 hover:via-transparent hover:to-transparent transition-all duration-500 ease-in-out"
              ></div>

              <div
                onClick={moveRight}
                className="w-1/2 h-full cursor-pointer bg-transparent hover:bg-gradient-to-l hover:from-black/10 hover:via-transparent hover:to-transparent transition-all duration-500 ease-in-out"
              ></div>
            </div>
          </main>
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-xl shadow-xl p-8 max-w-3xl w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-black text-xl"
              onClick={() => setSelected(null)}
            >
              ×
            </button>

            <img
              src={selected.image}
              alt={selected.title}
              className="w-full h-64 object-cover rounded-lg mb-6"
            />

            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              {selected.title}
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              {selected.description}
            </p>

            {selected.stack && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Tech Used
                </h3>
                <p className="text-gray-700">{selected.stack}</p>
              </div>
            )}

            {selected.link && (
              <a
                href={selected.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-black text-white px-6 py-3 rounded-lg text-lg"
              >
                Visit Project
              </a>
            )}
          </div>
        </div>
      )}
    </>
  );
}
