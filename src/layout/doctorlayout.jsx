import React, { useState, useEffect, useRef } from "react";
import DoctorSidebar from "../components/Doctor/doctorsidebar.jsx";
import DoctorTopbar from "../components/Doctor/doctortopbar.jsx";

const DoctorLayout = ({ children, doctorName = "Dr. John" }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const layoutRef = useRef(null);

  // close sidebar when clicking outside (any screen)
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        sidebarOpen &&
        layoutRef.current &&
        !layoutRef.current.contains(e.target)
      ) {
        setSidebarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [sidebarOpen]);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  return (
    <div
      ref={layoutRef}
      className="flex min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 relative overflow-hidden"
    >
      {/* Subtle animated background shimmer */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.08),transparent_70%)] animate-pulse-slow"></div>

      {/* Sidebar */}
      <DoctorSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main area */}
      <div className="flex flex-col flex-1 relative z-10">
        <DoctorTopbar
          name={doctorName}
          onToggleSidebar={toggleSidebar}
          isSidebarOpen={sidebarOpen}
        />

        {/* Main Content */}
        <main className="p-6 mt-4 overflow-y-auto">
          <div className="rounded-2xl bg-white/60 backdrop-blur-xl shadow-xl border border-blue-100 p-6 transition-all duration-500 hover:shadow-2xl">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DoctorLayout;
