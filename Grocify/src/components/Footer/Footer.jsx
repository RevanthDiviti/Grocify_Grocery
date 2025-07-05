import React from "react";

const Footer = () => {
  return (
    <footer className="bg-zinc-100 py-20">
      <div className="max-w-[1400px] px-10 mx-auto ">
        <a href="#" className="text-3xl font-bold ">
          Gr<span className="text-orange-500 uppercase ">o</span>cify
        </a>
        <p className="text-zinc-600 mt-6 max-w-[360px]  ">
          Bred for a high content of beneficial substances. Our products are all
          fresh and healthy.
        </p>
        <p className="text-zinc-800 mt-6">2025 &copy; All Rights Reserved</p>
      </div>
      <ul>
        <li>
            <h className="text-zinc-800 text-2xl">Company</h>
        </li>
        <li>
            <a href="#">About</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
