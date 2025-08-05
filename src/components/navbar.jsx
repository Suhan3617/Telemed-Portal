import React from "react";

const Navbar = () => {
  return (
    <div className="navbar m-5 rounded-2xl shadow-lg">
      <nav className="bg-blue-500 p-5 rounded-2xl flex justify-between items-center">
        <div className="logo">
          <h1 className="text-4xl text-white">Telemed Portal</h1>
        </div>
        <div className="flex justify-between align-middle gap-10 text-white">
          <h1 className="hover:-translate-y-1 transition-transform hover:text-gray-200">
            About
          </h1>
          <h1 className="hover:-translate-y-1 transition-transform hover:text-gray-200">
            Doctors
          </h1>
          <h1 className="hover:-translate-y-1 transition-transform hover:text-gray-200">
            FAQs
          </h1>
          <h1 className="hover:-translate-y-1 transition-transform hover:text-gray-200">
            Signup
          </h1>
          <h1 className="hover:-translate-y-1 transition-transform hover:text-gray-200">
            Login
          </h1>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
