import React from "react";

const AccountSettings = () => (
  <div className="bg-white p-6 shadow-md rounded-xl">
    <h3 className="text-lg font-semibold text-blue-600 mb-4">
      Account Settings
    </h3>
    <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
      Deactivate Account
    </button>
  </div>
);

export default AccountSettings;
