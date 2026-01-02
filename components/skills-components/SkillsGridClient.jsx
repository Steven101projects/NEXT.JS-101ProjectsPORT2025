"use client";
import { useState } from "react";
import skill from "@/app/data/skills";

export default function SkillsGridClient({ services }) {
  const [selectedService, setSelectedService] = useState(null);
  const [showHint, setShowHint] = useState(false);

  const matchedSkill =
    selectedService &&
    skill.skills.find(s => s.title === selectedService.title);

  return (
    <>
      {/* Hint */}
      {showHint && (
        <div className="fixed top-6 right-6 z-50 bg-black text-white px-6 py-4 rounded-xl shadow-lg">
          Press the Message Icon to send a message!
        </div>
      )}

      {/* Service Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-[70px] my-7 justify-items-center">
        {services.map(service => (
          <div
            key={service.id}
            className="
              flex flex-col bg-white border border-black rounded-[28px]
              p-6 text-center shadow-sm
              transition-all duration-300
              hover:shadow-lg hover:-translate-y-[6px]
            "
            style={{ maxWidth: "450px", height: "500px" }}
          >
            <div className="w-full h-[50%] mb-4 overflow-hidden rounded-[15px]">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-gray-600 text-sm mb-1">0{service.id}</p>

            <h3 className="italic font-semibold text-xl mb-2">
              {service.title}
            </h3>

            <div className="w-full border-t border-black mb-4"></div>

            <p className="text-sm text-gray-700 italic leading-relaxed px-4">
              {service.description}
            </p>

            <div className="mt-auto flex justify-center">
              <button
                onClick={() => setSelectedService(service)}
                className="text-white text-sm bg-black px-6 py-2 rounded-md hover:bg-gray-800 transition"
              >
                Know more →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedService && matchedSkill && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center px-4">
          <div className="
            bg-[#fdfcf8]
            w-full max-w-5xl
            h-[85vh]
            rounded-2xl
            shadow-2xl
            flex flex-col
            border border-black
          ">
            {/* Header */}
            <div className="flex justify-between items-center px-8 py-6 border-b border-black">
              <h2 className="text-4xl font-semibold italic font-serif">
                {matchedSkill.title}
              </h2>
              <button
                onClick={() => setSelectedService(null)}
                className="text-4xl font-bold leading-none hover:opacity-70"
              >
                ×
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto px-8 py-6 font-serif">
              {/* Overview */}
              <p className="text-xl leading-relaxed mb-8">
                {matchedSkill.overview}
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Experience */}
                <div className="lg:col-span-2">
                  <h3 className="text-xl font-semibold mb-4 border-b border-black pb-2">
                    Experience
                  </h3>

                  <ul className="list-disc pl-6 space-y-3 text-lg">
                    {matchedSkill.experience.map((exp, index) => (
                      <li key={index}>
                        {exp.period && <strong>{exp.period}: </strong>}
                        {exp.role && <strong>{exp.role}: </strong>}
                        {exp.organization && (
                          <strong>{exp.organization}: </strong>
                        )}
                        {exp.description}
                      </li>
                    ))}
                  </ul>

                  {matchedSkill.projects && (
                    <>
                      <h3 className="text-xl font-semibold mt-10 mb-4 border-b border-black pb-2">
                        Projects and Links
                      </h3>

                      <ul className="list-disc pl-6 space-y-3 text-lg">
                        {matchedSkill.projects.instagram && (
                          <li>
                            Instagram:{" "}
                            <a
                              href={matchedSkill.projects.instagram}
                              target="_blank"
                              className="underline"
                            >
                              {matchedSkill.projects.instagram}
                            </a>
                          </li>
                        )}

                        {matchedSkill.projects.youtube && (
                          <li>
                            YouTube:{" "}
                            <a
                              href={matchedSkill.projects.youtube}
                              target="_blank"
                              className="underline"
                            >
                              {matchedSkill.projects.youtube}
                            </a>
                          </li>
                        )}

                        {matchedSkill.projects.github && (
                          <li>
                            GitHub:{" "}
                            <a
                              href={matchedSkill.projects.github}
                              target="_blank"
                              className="underline"
                            >
                              {matchedSkill.projects.github}
                            </a>
                          </li>
                        )}

                        {matchedSkill.projects.applications &&
                          matchedSkill.projects.applications.map((app, index) => (
                            <li key={index}>
                              {app.name}:{" "}
                              <a
                                href={app.link}
                                target="_blank"
                                className="underline"
                              >
                                {app.link}
                              </a>
                            </li>
                          ))}

                        {matchedSkill.projects.publication && (
                          <li>
                            {matchedSkill.projects.publication.title} by{" "}
                            {matchedSkill.projects.publication.author}
                          </li>
                        )}
                      </ul>
                    </>
                  )}
                </div>

                {/* Image */}
                <div>
                  <img
                    src={selectedService.image}
                    alt={selectedService.title}
                    className="w-full h-64 object-cover rounded-xl border border-black"
                  />
                </div>
              </div>

              {/* CTA */}
              <div className="flex justify-end mt-12">
                <button
                  onClick={() => {
                    setSelectedService(null);
                    setShowHint(true);
                    setTimeout(() => setShowHint(false), 3000);
                  }}
                  className="px-8 py-3 border border-black rounded-full text-lg hover:bg-black hover:text-white transition"
                >
                  Let’s Talk!
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
