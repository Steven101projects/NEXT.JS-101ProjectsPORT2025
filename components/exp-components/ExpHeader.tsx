import NavWheel from "./NavWheel"




export default function ExpHeader(){

    return(
        <div id="links">
          <p className="px-2 py-1 text-[5vw]">
            Experience
          </p>
          <nav>
            <NavWheel />
          </nav>
          <div id="copyRight" className="text-[1.4rem] ml-3.5 mt-2.5">
            Copyright © 2025 <br /> Nico Castro. <br /> All rights reserved.
          </div>
        </div>
    )
}