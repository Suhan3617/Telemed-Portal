import React from "react";

const doctorlogin = () => {
  return (
    <div className="text-center">
      <div className="my-4">
        <input
          className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 my-2"
          type="email"
          placeholder="Email"
        />
        <input
          className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 my-2"
          type="password"
          placeholder="Password"
        />
      </div>
      <button className="w-full bg-red-500 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-800 my-2">
        Login
      </button>
    </div>
  );
};

export default doctorlogin;
