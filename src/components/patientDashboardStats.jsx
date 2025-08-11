import React from "react";

const patientDashboardStats = () => {
  const stats = [
    { id: 1, title: "Upcoming", value: 3 },
    { id: 2, title: "Completed", value: 28 },
    { id: 3, title: "Doctors", value: 12 },
  ];
  //upcoming walo ko yellow karna h aur completed wale ko green badme bana denge
  return (
    <div className="mt-8 ml-5 mr-5 flex items-center justify-around gap-5">
      {stats.map((s) => (
        <div key={s.id} className="bg-white p-4 rounded-xl  shadow w-full flex justify-center gap-10">
          <div className="text-sm text-gray-500">{s.title}</div>
          <div className="text-sm text-gray-500">{s.value}</div>
        </div>
      ))}
    </div>
  );
};

export default patientDashboardStats;
