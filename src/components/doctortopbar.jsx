import React from "react";

const doctortopbar = () => {
  return (
    <div className="bg-white shadow-md p-4 flex justify-between items-center">
      <h2 className="text-2xl font-semibold">Welcome Back Dr.Smith</h2>
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="search..."
          className="border rounded-lg  p-4"
        />
        <img
          src="https://via.placeholder.com/40"
          alt="Doctor"
          className="rounded-full w-10 h-10"
        />
      </div>
    </div>
  );
};

export default doctortopbar;
