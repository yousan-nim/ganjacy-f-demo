"use client";
import React, { useState } from "react";
import LangsBar from "./langsbar";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full h-auto relative">
      <LangsBar />

      <div className="w-full h-[8vh] bg-white border-[1px] border-gray-100 flex items-center justify-between px-4">
        <button className="flex items-center justify-center text-xl font-bold">
          <img src="/logos/Ganjacy.png" alt="Ganjacy Logo" className="h-8" />
        </button>

        <div className="hidden xl:flex items-center gap-6 text-lg font-bold text-green-700 drop-shadow-md">
          <button>HOME</button>
          <button>ORDER</button>
          <button>STRAIN FINDER</button>
          <button>BUZZ</button>
          <button>DISPENSARIES</button>
          <button>HEALTHCARE & CULTURE</button>
        </div>

        <button
          onClick={toggleMenu}
          className="xl:hidden text-green-700 text-3xl"
        >
          {isMenuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      <div
        className={`xl:hidden fixed z-10 top-0 left-0 -mt-5 w-screen h-screen bg-white border-t-[1px] border-gray-200 flex flex-col items-start gap-4 p-4 transform transition-all duration-300 ${
          isMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
        style={{ top: "8vh" }}
      >
        <button
          onClick={toggleMenu}
          className="xl:hidden text-green-700 text-3xl self-end"
        >
          {isMenuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
        <button className="text-green-700 text-lg font-bold">HOME</button>
        <button className="text-green-700 text-lg font-bold">ORDER</button>
        <button className="text-green-700 text-lg font-bold">
          STRAIN FINDER
        </button>
        <button className="text-green-700 text-lg font-bold">BUZZ</button>
        <button className="text-green-700 text-lg font-bold">
          DISPENSARIES
        </button>
        <button className="text-green-700 text-lg font-bold">
          HEALTHCARE & CULTURE
        </button>
      </div>
    </div>
  );
};

export default Navbar;
