
import React from "react";
import DoctorSidebar from "../components/Doctor/doctorsidebar.jsx";
import DoctorTopbar from "../components/Doctor/doctortopbar.jsx";

const DoctorLayout = ({children}) => {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Sidebar */}
      <DoctorSidebar />

      {/* Main content area */}
      <div className="flex flex-col flex-1">
        <DoctorTopbar />

        {/* Content area with proper padding */}
        <main className="p-6 mt-4 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DoctorLayout;
