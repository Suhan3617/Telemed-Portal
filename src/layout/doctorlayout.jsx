import React, { useState, useEffect, useRef } from "react";
import DoctorSidebar from "../components/Doctor/doctorsidebar.jsx";
import DoctorTopbar from "../components/Doctor/doctortopbar.jsx";

const DoctorLayout = ({ children, doctorName = "Dr. John" }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false); // closed by default on all screens
  const layoutRef = useRef(null);

  // 🟦 Remove auto open/close behavior on resize.
  // Just ensure sidebar closes if resized to small screen while open.
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768 && sidebarOpen) {
        setSidebarOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [sidebarOpen]);

  // 🟨 Close sidebar when clicking outside (on mobile)
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        sidebarOpen &&
        layoutRef.current &&
        !layoutRef.current.contains(e.target)
      ) {
        if (window.innerWidth < 768) setSidebarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [sidebarOpen]);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  return (
    <div ref={layoutRef} className="flex min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Sidebar */}
      <DoctorSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main content area */}
      <div className="flex flex-col flex-1 transition-all duration-300">
        {/* Topbar */}
        <DoctorTopbar
          name={doctorName}
          onToggleSidebar={toggleSidebar}
          isSidebarOpen={sidebarOpen}
        />

        {/* Page content */}
        <main className="p-6 mt-4 overflow-y-auto transition-all duration-300">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DoctorLayout;
