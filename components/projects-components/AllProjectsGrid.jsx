"use client";
import { useState } from "react";
import projects from "@/app/data/projects";

export default function AllProjectsGrid() {
  const [selectedProject, setSelectedProject] = useState(null);

  const sortedProjects = [...projects].sort((a, b) =>
    a.title.localeCompare(b.title, undefined, { numeric: true, sensitivity: "base" })
  );

  return (
    <div className="w-full py-8">

      {/* Modal with blurred background */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-6"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white rounded-3xl shadow-xl p-12 w-full max-w-6xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-4 w-10 h-10 flex items-center justify-center text-lg font-medium text-black transition duration-200"
            >
              X
            </button>

            <div className="flex flex-col md:flex-row gap-12">

              {/* Left text section */}
              <div className="w-full md:w-1/2">
                <h2 className="text-4xl font-semibold mb-6">
                  {selectedProject.title}
                </h2>

                <p className="text-gray-700 mb-8 leading-relaxed">
                  {selectedProject.description}
                </p>

                <p className="font-semibold mb-2">Design</p>
                <p className="text-gray-700 mb-8">
                  {selectedProject.design || "Coming soon"}
                </p>

                <p className="font-semibold mb-2">Documentation</p>
                <p className="text-gray-700">
                  {selectedProject.documentation || "Coming soon"}
                </p>
              </div>

              {/* Right image */}
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="w-full h-72 md:h-96 rounded-xl overflow-hidden border">
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
      {/* Grid */}
<div className="grid 
  grid-cols-1 
  sm:grid-cols-1 
  md:grid-cols-2 
  lg:grid-cols-2 
  gap-4 
  px-4 
  justify-items-center"
>
  {sortedProjects.map((p) => (
    <div
      key={p.id}
      onClick={() => setSelectedProject(p)}
      className="flex flex-col bg-white border rounded-2xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-[1.02] cursor-pointer"
      style={{
        width: "100%",
        maxWidth: "600px",
      }}
    >
      <div className="relative w-full h-48 overflow-hidden">
        <img
          src={p.image}
          alt={p.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div className="flex flex-col justify-between p-5 text-center">
        <h3 className="text-xl font-semibold text-gray-900 mb-1 font-[Inter]">
          {p.title}
        </h3>
        <p className="text-sm text-gray-600 mb-3 leading-relaxed font-[Poppins]">
          {p.description}
        </p>
      </div>
    </div>
  ))}
</div>
    </div>
  );
}
