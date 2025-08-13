import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar m-5 rounded-2xl shadow-lg">
      <nav className="bg-blue-500 p-5 rounded-2xl flex justify-between items-center">
        <div className="logo">
          <h1 className="text-4xl text-white">Telemed Portal</h1>
        </div>
        <div className="flex justify-between items-center gap-10 text-white">
          <Link to="/patientdashboard">
            <button className="hover:-translate-y-1 transition-transform hover:text-gray-200">
              Patient
            </button>
          </Link>
          <Link to="/doctor/overview">
            <h1 className="hover:-translate-y-1 transition-transform hover:text-gray-200">
              Doctors
            </h1>
          </Link>
          <h1 className="hover:-translate-y-1 transition-transform hover:text-gray-200">
            Contact Us
          </h1>
          {/* Signup and Login buttons bana do idhar hi */}
          <div className="flex gap-4">
            <Link to="/signup">
              <button className="bg-red-500 rounded-xl px-4 py-2 hover:-translate-y-1 transition-transform hover:text-gray-200">
                Join Us
              </button>
            </Link>
            <Link to="/login">
              <button className="bg-red-500 rounded-xl px-4 py-2 hover:-translate-y-1 transition-transform hover:text-gray-200">
                Login
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
