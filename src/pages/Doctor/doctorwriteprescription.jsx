import React from "react";
import Doctorprescriptionform from "../../components/Doctor/doctorprescriptionform";
import { patients } from "../../data/doctor/mockdata";

const doctorprescription = () => {
  const onsubmit = (data) => {
    console.log("PRESCRIPTION SUBMITTED", data);
    alert("Generate PDF & send to portal - integrate backend here");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-b from-blue-200 to-white p-4">
      <div className="w-full max-w-lg">
        <Doctorprescriptionform patients={patients} onSubmit={onsubmit} />
      </div>
    </div>
  );
};

export default doctorprescription;
