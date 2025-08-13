import React from "react";

const doctorstats = () => {
  const stats = [
    {
      title: "Today’s Appointments",
      value: 5,
      color: "bg-blue-100 text-blue-700",
    },
    {
      title: "Pending Prescriptions",
      value: 3,
      color: "bg-yellow-100 text-yellow-700",
    },
    {
      title: "Unread Messages",
      value: 8,
      color: "bg-green-100 text-green-700",
    },
    {
      title: "Recent Patients",
      value: 12,
      color: "bg-purple-100 text-purple-700",
    },
  ];
  return(
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s,idx)=>(
            <div key={idx} className="p-5 rounded-xl shadow bg-white flex flex-col items-center">
                <div className={`px-3 py-1 rounded-full text-sm font-semibold ${s.color}`}>
                    {s.title}
                </div>
                <div className="mt-2 text-2xl font-bold">{s.value}</div>
            </div>
        ))}
    </div>
  )
};

export default doctorstats;
