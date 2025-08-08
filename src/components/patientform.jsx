import React from "react";

const patientform = () => {
  return (
    <div>
      <div className=" bg-blue-400">
        <h1>Patient Signup</h1>
        <h2>Credentials</h2>
        <div>
          <input
            className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 my-2"
            type="text"
            placeholder="Username"
          />
          <input
            className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 my-2"
            type="text"
            placeholder="Full Name"
          />
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
        <h2>Personal Details</h2>
        <div>
          <select name="" id="">
            <option value="">Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">Others</option>
          </select>
          <input
            className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 my-2"
            type="date"
            placeholder="Date of Birth"
          />
          <input
            className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 my-2"
            type="text"
            placeholder="Contact Number"
          />
          <input
            className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 my-2"
            type="text"
            placeholder="Medical History"
          />
        </div>
        <div className="mt-4">
          <input type="checkbox" id="privacy" />
          <label htmlFor="privacy" className="ml-2">
            I agree to the{" "}
            <a href="/privacy" className="text-blue-600 underline">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="/terms" className="text-blue-600 underline">
              Terms & Conditions
            </a>
          </label>
        </div>
      </div>
    </div>
  );
};

export default patientform;
