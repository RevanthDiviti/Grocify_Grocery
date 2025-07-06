import React, { useEffect, useState } from "react";
import { GoHeartFill } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { TbMenu2 } from "react-icons/tb";
import { TbMenu3 } from "react-icons/tb";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const homeTab = () => window.scrollTo(0, 0);
  const aboutTab = () => window.scrollTo(0, 1460);
  const processTab = () => window.scrollTo(0, 3980);
  const contactTab = () => window.scrollTo(0, 5000);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`bg-white fixed top-0 right-0 left-0 z-50 
        ${isScrolled ? "drop-shadow-[0_4px_25px_rgba(0,0,0,0.1)]" : ""} `}
    >
      <nav className=" max-w-[1400px] mx-auto px-10 md:h-[14vh] h-[12vh] flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold ">
          Gr<span className="text-orange-500 uppercase ">o</span>cify
        </Link>

        {/* Desktop Menu */}
        <ul className="md:flex gap-x-15 hidden ">
          <li>
            <Link
              to="/"
              id="home_tab"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
              onClick={homeTab}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
              onClick={aboutTab}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
              onClick={processTab}
            >
              Process
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
              onClick={contactTab}
            >
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Nav Action */}
        <div className="flex items-center gap-x-5">
          {/* Inpur Field */}
          <div className="md:flex p-1 border-2 border-orange-500 rounded-full hidden ">
            <input
              type="text"
              name="text"
              id="text"
              placeholder="Search..."
              autoComplete="off"
              className="flex-1 h-[5vh] px-3 focus:outline-none "
            />
            <button className="bg-gradient-to-b from-orange-400 to-orange-500 h-10 w-10 text-white text-xl flex justify-center items-center rounded-full ">
              <IoSearch />
            </button>
          </div>

          <Link to="" className="text-zinc-800 text-2xl">
            <GoHeartFill />
          </Link>
          <Link to="" className="text-zinc-800 text-2xl">
            <HiShoppingBag />
          </Link>
          {/* Hamburger */}
          <Link to="#" className="text-zinc-800 text-3xl  md:hidden">
            {showMenu ? (
              <TbMenu3 onClick={toggleMenu} />
            ) : (
              <TbMenu2 onClick={toggleMenu} />
            )}
          </Link>
        </div>

        {/* Mobile Menu */}
        <ul
          className={`flex flex-col gap-y-12 bg-orange-500/15 backdrop-blur-xl shadow-xl rounded-xl p-10 items-center gap-x-15
         md:hidden absolute top-30 -left-full transform -translate-x-1/2 transition-all duration-500 ${
           showMenu ? "left-1/2 " : " "
         } `}
        >
          <li>
            <Link
              to="/"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
              onClick={homeTab}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="#"
              onClick={aboutTab}
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="#"
              onClick={processTab}
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Process
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"              
              onClick={contactTab}
            >
              Contact Us
            </Link>
          </li>
          <li className="flex p-1 border-2 border-orange-500 rounded-full md:hidden ">
            <input
              type="text"
              name="text"
              id="text"
              placeholder="Search..."
              autoComplete="off"
              className="flex-1 h-[5vh] px-3 focus:outline-none "
            />
            <button className="bg-gradient-to-b from-orange-400 to-orange-500 h-10 w-10 text-white text-xl flex justify-center items-center rounded-full ">
              <IoSearch />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
