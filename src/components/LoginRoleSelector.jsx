import React from "react";

const LoginRoleSelector = ({ setrole }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center">Login as!</h1>

      <div className="flex justify-center gap-10 m-5 my-8">
        <button
          onClick={() => setrole("doctor")}
          className="bg-red-500 rounded-xl px-4 py-2 hover:-translate-y-1 transition-transform hover:text-gray-200"
        >
          Doctor
        </button>
        <button
          onClick={() => setrole("patient")}
          className="bg-red-500 rounded-xl px-4 py-2 hover:-translate-y-1 transition-transform hover:text-gray-200"
        >
          Patient
        </button>
      </div>
    </div>
  );
};

export default LoginRoleSelector;
