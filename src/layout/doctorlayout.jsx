import React, { useState } from "react";
import DoctorSidebar from "../components/Doctor/doctorsidebar";
import DoctorTopbar from "../components/Doctor/doctortopbar";

const DoctorLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex">
      {/* Sidebar */}
      <DoctorSidebar mobileOpen={sidebarOpen} setMobileOpen={setSidebarOpen} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Topbar */}
        <DoctorTopbar
          name="Dr. Smith"
          onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
          isSidebarOpen={sidebarOpen}
        />

        {/* Page content */}
        <main className="p-6 bg-blue-50 min-h-screen">{children}</main>
      </div>
    </div>
  );
};

export default DoctorLayout;
