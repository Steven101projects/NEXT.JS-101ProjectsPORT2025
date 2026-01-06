"use client";
import { useState } from "react";
import projects from "@/app/data/projects";

export default function AllProjectsGrid() {
  const [selectedProject, setSelectedProject] = useState(null);

  const sortedProjects = [...projects].sort((a, b) =>
    a.title.localeCompare(b.title, undefined, {
      numeric: true,
      sensitivity: "base"
    })
  );

  return (
    <div className="w-full py-8">

      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-6"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white rounded-3xl shadow-2xl p-10 md:p-14 w-full max-w-6xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-5 w-10 h-10 flex items-center justify-center text-lg font-medium text-gray-700 hover:text-black"
            >
              X
            </button>

            <div className="flex flex-col md:flex-row gap-12">

              {/* Left content */}
              <div className="w-full md:w-1/2 flex flex-col">

                <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-900">
                  {selectedProject.title}
                </h2>

                <p className="text-gray-600 mb-10 leading-relaxed">
                  {selectedProject.description}
                </p>

                {/* Design section */}
                <div className="bg-gray-50 rounded-2xl p-6 mb-6 border">
                  <p className="text-lg font-semibold mb-3 text-gray-900">
                    Design
                  </p>

                  <p className="text-gray-700 mb-4">
                    {selectedProject.design?.approach || "Coming soon"}
                  </p>

                  {selectedProject.design?.canvaLink && (
                    <a
                      href={selectedProject.design.canvaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 rounded-lg border text-sm font-medium text-gray-800 hover:bg-gray-100"
                    >
                      View Canva Design
                    </a>
                  )}
                </div>

                {/* Documentation section */}
                <div className="bg-gray-50 rounded-2xl p-6 border">
                  <p className="text-lg font-semibold mb-3 text-gray-900">
                    Documentation
                  </p>

                  <div className="flex flex-col gap-3">
                    {selectedProject.documentation?.githubLink && (
                      <a
                        href={selectedProject.documentation.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 rounded-lg border text-sm font-medium text-gray-800 hover:bg-gray-100"
                      >
                        GitHub Repository
                      </a>
                    )}

                    {selectedProject.documentation?.googleDocsLink && (
                      <a
                        href={selectedProject.documentation.googleDocsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 rounded-lg border text-sm font-medium text-gray-800 hover:bg-gray-100"
                      >
                        Google Docs
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Right image */}
              <div className="w-full md:w-1/2 flex justify-center items-start">
                <div className="w-full h-72 md:h-96 rounded-2xl overflow-hidden border shadow-sm">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 justify-items-center">
        {sortedProjects.map((p) => (
          <div
            key={p.id}
            onClick={() => setSelectedProject(p)}
            className="flex flex-col bg-white border rounded-2xl shadow-md overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
            style={{ maxWidth: "600px", width: "100%" }}
          >
            <div className="relative w-full h-48 overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            <div className="flex flex-col p-5 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                {p.title}
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed">
                {p.description}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
