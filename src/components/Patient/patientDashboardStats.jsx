import React from "react";

const PatientDashboardStats = () => {
  const stats = [
    { id: 1, title: "Upcoming", value: 3, color: "bg-yellow-100 text-yellow-700" },
    { id: 2, title: "Completed", value: 28, color: "bg-green-100 text-green-700" },
    { id: 3, title: "Doctors", value: 12, color: "bg-blue-100 text-blue-700" },
  ];

  return (
    <div className="grid sm:grid-cols-3 gap-4">
      {stats.map((s) => (
        <div
          key={s.id}
          className={`p-5 rounded-xl shadow bg-white flex flex-col items-center justify-center`}
        >
          <div className={`px-3 py-1 rounded-full text-sm font-semibold ${s.color}`}>
            {s.title}
          </div>
          <div className="mt-2 text-2xl font-bold">{s.value}</div>
        </div>
      ))}
    </div>
  );
};

export default PatientDashboardStats;
