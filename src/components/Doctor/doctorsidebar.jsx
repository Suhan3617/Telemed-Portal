import { Calendar, FileText, Home, MessageSquare, Settings, Users } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const doctorsidebar = () => {
  const menuitems=[
    { name:"Dashboard" , icon:<Home size={18}/> , path:"/"},
    { name:"Appointments" , icon:<Calendar size={18}/> , path:"/doctor/appointments"},
    { name:"Patients" , icon:<Users size={18}/> , path:"/doctor/patients"},
    { name:"Messages" , icon:<MessageSquare size={18}/> , path:"/doctor/messages"},
    { name:"Reports" , icon:<FileText size={18}/> , path:"/doctor/records"},
    { name:"Settings" , icon:<Settings size={18}/> , path:"/doctor/settings"},
  ]
  
  return (
    <div className="bg-blue-500 text-white h-screen w-64 p-5 flex flex-col">
      <h2 className="text-2xl font-bold mb-8">Doctor Portal</h2>
      <nav>
        {menuitems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className="flex items-center gap-3 hover:bg-blue-600 p-2 rounded-lg transition"
          >
            {item.icon}
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default doctorsidebar;
