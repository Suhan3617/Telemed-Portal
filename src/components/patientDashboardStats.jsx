import React from "react";

const patientDashboardStats = () => {
  const stats = [
    { id: 1, title: "Upcoming", value: 3 },
    { id: 2, title: "Completed", value: 28 },
    { id: 3, title: "Doctors", value: 12 },
  ];
  return (
    <div>
      {stats.map((s) => (
        <div key={s.id} className="bg-white p-4 rounded-xl shadow">
          <div className="text-sm text-gray-500">{s.title}</div>
          <div className="text-sm text-gray-500">{s.value}</div>
        </div>
      ))}
    </div>
  );
};

export default patientDashboardStats;
