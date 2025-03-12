import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-[#33353F] text-white px-6 sm:px-16 py-4 bg-[#121212]">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between text-center sm:text-left">
        <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-900">
          Uthpala Abeysinghe
        </span>
        <p className="text-slate-500 text-sm mt-2 sm:mt-0">
          Designed by UTHPALA ABEYSINGHE || All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

