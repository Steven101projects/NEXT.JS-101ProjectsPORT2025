export default function HelloCard() {
  return (
    <div>
      <div
        className="
          absolute top-[21vh] right-[3vw] w-[49vw] h-[50vh] 
          bg-white border-2 border-black rounded-4xl pl-4 flex flex-col 
          shadow-md asfalt
        "
      >
        <div className="flex">
          <h1 className="relative bottom-[2vh] text-[7.6vw] text-[#222222]">
            Hello,<span className="italic">World!</span>
          </h1>

          <img
            src="/earth.gif"
            alt="Earth"
            className="w-[29vh] h-[29vh] object-cover rounded-full absolute bottom-[1vh] right-[1vw]"
          />
        </div>

        <p className="relative bottom-[5vh] text-[4vh] text-[#222222] ml-1 italic leading-snug">
          I am a creative who loves problem solving <br />
          and thinking critically. <br /> Man..
          living in this world is hard,<br />
          so let us make it easier together!
        </p>
      </div>

      <p className="absolute bottom-[24vh] right-[4vw] text-xl text-black">
              -- Full Stack Developer - Software Design Engineer - Graphic Specialist - Instructor. --
      </p>
      <p className="absolute bottom-[20vh] right-[4vw] text-lg text-black">Copyright © 2025
Nico Castro.
All rights reserved.</p>
    </div>
  );
}
