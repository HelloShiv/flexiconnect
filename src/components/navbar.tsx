"use client";

import { useState } from "react";
import { Button } from "./ui/button";

export default function Navbar() {
  // State to manage menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev); // Toggle menu open/close state
  };

  return (
    <nav className="flex justify-between items-center px-[5%] m-auto py-6 relative bg-black">
      {/* Logo */}
      <h1 className="md:text-2xl my-40 text-xl font-bold transform hover:scale-105 transition-transform bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FDBFE)] text-transparent bg-clip-text">
        FlexiConnect
      </h1>

      <div className="navbar_right_component flex  ">
        {/* Menu Items */}
        <div
          className={`absolute md:static ${
            isMenuOpen ? "top-[80px] opacity-100" : "top-[-500px] opacity-0"
          } flex flex-col md:flex-row gap-6 md:gap-8 md:min-h-fit min-h-[50vh] left-0 w-full md:w-auto  bg-transparent  md:bg-transparent md:opacity-100
          md:top-0 transition-all duration-300 ease-in-out z-10 x  `}
        >
          <ul className="flex flex-col md:flex-row md:items-center gap-6 justify-center pl-[5%] px-[5%] py-[5%] opacity-70 font-bold tracking-tighter">
            <li>
              <a href="\doc">
              <h2 className="cursor-pointer hover:text-[#8d55ff] transform hover:scale-105 transition-transform md:text-xl text-2xl  ">
                API
              </h2>
              </a>
            </li>
            <li>
              <h2 className="cursor-pointer hover:text-[#8d55ff] transform hover:scale-105 transition-transform md:text-xl text-2xl ">
                Pricing
              </h2>
            </li>
            <li>
              <h2 className="cursor-pointer hover:text-[#8d55ff] transform hover:scale-105 transition-transform md:text-xl text-2xl whitespace-nowrap ">
                Log in
              </h2>
            </li>
          </ul>
        </div>

      
      <div className="flex items-center gap-6 ml-8">
        <Button className="bg-white text-black   rounded hover:bg-[#8d55ff] hover:text-white transform hover:scale-105 transition-transform">
          Sign Up
        </Button>

        {/* Hamburger/Cross Icon */}
        <div
          className="text-2xl cursor-pointer md:hidden"
          onClick={toggleMenu}
        >
          {isMenuOpen ? "✕" : "☰"}
        </div>
      </div>
      </div>
    </nav>
  );
}
