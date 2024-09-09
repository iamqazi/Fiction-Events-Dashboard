import React, { useState } from "react";
import Navbar from "./Navbar";
import NavbarToggleButton from "./NavbarToggleButton";

export default function Layout() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  function toggleNavbar() {
    setIsNavbarOpen((prevState) => !prevState);
    console.log("Toggling navbar:", isNavbarOpen);
  }

  return (
    <div>
      <NavbarToggleButton toggleNavbar={toggleNavbar} />
      <div
        className={`fixed top-0 right-0 w-[250px] h-full bg-gray-800 transform ${
          isNavbarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 sm:hidden z-40`}
      >
        <Navbar />
      </div>
    </div>
  );
}
