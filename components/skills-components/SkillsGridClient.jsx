"use client";
import { useState } from "react";

export default function ServicesGridClient({ services }) {
  const [selectedService, setSelectedService] = useState(null);
  const [showHint, setShowHint] = useState(false);

  return (
    <>
    {showHint && (
  <div className="fixed top-6 right-6 z-50 bg-black text-white px-6 py-4 rounded-xl shadow-lg">
    Press the Message Icon to send a message!
  </div>
)}

      {/* Service Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-[70px] my-7 justify-items-center">
        {services.map((service) => (
          <div
  key={service.id}
  className="
    relative z-0
    flex flex-col bg-white border-black border rounded-[28px]
    p-6 text-center shadow-sm overflow-hidden
    transition-all duration-300
    hover:shadow-lg hover:-translate-y-[6px]
  "
  style={{
    width: "100%",
    maxWidth: "450px",
    height: "500px"
  }}
>
  {/* Image */}
  <div className="w-full h-[50%] mb-4 overflow-hidden rounded-[15px]">
    <img
      src={service.image}
      alt={service.title}
      className="w-full h-full object-cover"
    />
  </div>

  {/* Number + Title + Line */}
  <div className="flex flex-col items-center">
    <p className="text-gray-600 text-sm mb-1">0{service.id}</p>

    <h3 className="italic font-semibold text-xl mb-2">
      {service.title}
    </h3>

    <div className="w-full border-t border-black mb-4"></div>
  </div>

  {/* Description */}
  <p className="text-sm text-gray-700 italic leading-relaxed px-4">
    {service.description}
  </p>

  {/* Button */}
  <div className="mt-auto mb-2 flex justify-center">
    <button
      onClick={() => setSelectedService(service)}
      className="
        text-white text-sm bg-black px-6 py-2 rounded-md
        hover:bg-gray-800 transition-colors
      "
    >
      Know more →
    </button>
  </div>
</div>

        ))}
      </div>

{selectedService && (
  <div className="fixed inset-0 bg-black/90 flex justify-center items-center z-50 px-4">

    <div className="bg-white rounded-2xl w-full max-w-5xl p-10 relative shadow-lg">

      {/* Thick Close X */}
      <button
        onClick={() => setSelectedService(null)}
        className="absolute top-6 right-6 text-4xl font-bold text-gray-800 hover:text-black cursor-pointer"
        style={{ lineHeight: ".3" }}
      >
        ×
      </button>
      {/* Title with underline */}
      <h2 className="text-4xl font-semibold italic mb-2">
        {selectedService.title}
      </h2>
      <div className="w-full border-t border-black mb-8"></div>

      {/* Description */}
      <p className="text-gray-700 leading-relaxed text-lg mb-6">
        {selectedService.details ||
          "This service provides comprehensive solutions tailored to your goals with a focus on design, performance, and user engagement."
        }
      </p>
      {/* Image */}
      <div className="flex">
        <div className="w-11/12"
        >
<p>Details: Put something here on the js file</p>
        </div>
      <img
        src={selectedService.image}
        alt={selectedService.title}
        className="w-96 h-64 object-cover rounded-xl mb-8"
      />
      </div>


      {/* Bottom button aligned right */}
<div className="w-full flex justify-end mt-8">
  <button
    onClick={() => {
      setSelectedService(null);      // close the modal
      setShowHint(true);             // show hint
      setTimeout(() => setShowHint(false), 3000);
    }}
    className="px-8 py-3 bg-white border border-black rounded-full text-lg hover:bg-black hover:text-white transition"
  >
    Let’s Talk!
  </button>
</div>


    </div>
  </div>
)}



    </>
  );
}
