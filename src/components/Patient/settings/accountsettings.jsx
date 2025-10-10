import React from "react";
import { UserX } from "lucide-react";

const AccountSettings = () => (
  <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 border border-blue-100">
    <h3 className="text-2xl font-semibold text-blue-600 mb-4 flex items-center gap-2">
      <UserX className="w-6 h-6 text-blue-500" /> Account Settings
    </h3>

    <p className="text-gray-600 mb-4">
      Manage your account preferences or deactivate your profile if you no longer
      wish to continue.
    </p>

    <button className="bg-red-500 text-white font-medium px-5 py-3 rounded-lg hover:bg-red-600 transition shadow-md">
      Deactivate Account
    </button>
  </div>
);

export default AccountSettings;
