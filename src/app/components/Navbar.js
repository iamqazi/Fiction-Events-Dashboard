import { useState } from "react";
import Logo from "../assets/Logo.svg";
import LogoWhite from "../assets/logowhite.svg";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import NavbarToggleButton from "./NavbarToggleButton";
export default function NavBar({ onMenuItemClick }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleToggle = (isOpen) => {
    setMenuOpen(isOpen);
  };

  return (
    <nav className="w-full bg-white border-b border-gray-200 relative">
      <div className="max-w-full w-full mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16 md:justify-between lg:justify-start">
        <Logo className="h-12 w-12 flex-shrink-0" />
        <div className="mx-12 relative w-full max-w-lg">
          <input
            type="text"
            placeholder="Search Events..."
            className="font-inter w-full placeholder-steel-blue bg-[#F9FAFC] border-none rounded-full px-4 py-2 pl-10 text-steel-blue focus:outline-vibrant-blue"
          />
          <MagnifyingGlassIcon
            className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5"
            style={{ color: "#3D4756" }}
          />
        </div>
        <div className="block lg:hidden">
          <NavbarToggleButton isOpen={menuOpen} onToggle={handleToggle} />
        </div>
      </div>
      {menuOpen && (
        <div className="fixed top-0 right-0 h-full w-full bg-[#5041BC] shadow-lg z-50 transition-transform transform translate-x-0">
          <div className="p-4 flex justify-between items-center">
            <LogoWhite />
            <NavbarToggleButton isOpen={menuOpen} onToggle={handleToggle} />
          </div>
          <div className="p-4 flex-col justify-center items-center">
            <div
              className="border-b-[1px] border-[#FFFFFF] py-3 cursor-pointer"
              onClick={() => onMenuItemClick("events")}
            >
              <p className="text-center text-[22px] font-[600] text-white">
                Dashboard
              </p>
            </div>
            <div
              className="border-b-[1px] border-[#FFFFFF] py-3 cursor-pointer"
              onClick={() => onMenuItemClick("favorites")}
            >
              <p className="text-center text-[22px] font-[600] text-white">
                Favorite Events
              </p>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
