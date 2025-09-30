import React, { useState } from "react";
import { doctors } from "../../data/doctor/mockdata";

const BookAppointment = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [consultationType, setConsultationType] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedDoctor || !consultationType || !selectedDay || !selectedSlot) {
      alert("⚠️ Please select all required fields!");
      return;
    }

    alert(
      `✅ Appointment booked with ${selectedDoctor.name} 
       📅 Day: ${selectedDay} 
       🕑 Slot: ${selectedSlot} 
       💻 Type: ${consultationType} 
       💰 Fee: ₹${
         consultationType === "Video Consultation"
           ? selectedDoctor.fee.video
           : selectedDoctor.fee.inperson
       }`
    );
  };

  return (
    <div className="flex min-h-screen bg-blue-100">
      <div className="flex-1 flex flex-col">

        <main className="p-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Book Appointment
          </h2>
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Doctor List */}
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-lg font-semibold mb-4">Select Doctor</h3>
              <div className="space-y-4">
                {doctors.map((doc) => (
                  <div
                    key={doc.id}
                    onClick={() => {
                      setSelectedDoctor(doc);
                      setConsultationType("");
                      setSelectedDay("");
                      setSelectedSlot("");
                    }}
                    className={`p-4 rounded-lg cursor-pointer shadow transition ${
                      selectedDoctor?.id === doc.id
                        ? "bg-blue-500 text-white"
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={doc.photo}
                        alt={doc.name}
                        className="w-12 h-12 rounded-full"
                      />
                      <div>
                        <p className="font-semibold text-2xl">{doc.name}</p>
                        <p className="text-sm">{doc.specialization}</p>
                        <p className="text-xs">{doc.experience}</p>
                        <p className="text-xs">{doc.hospital}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Appointment Form */}
            <form
              onSubmit={handleSubmit}
              className="bg-white p-6 rounded-xl shadow space-y-4"
            >
              <h3 className="text-2xl font-semibold">Select Appointment</h3>

              {/* Step 1: Consultation Type */}
              {selectedDoctor && (
                <div>
                  <p className="text-lg font-medium mb-2">Consultation Type</p>
                  <div className="flex gap-3 flex-wrap">
                    {selectedDoctor.consultationTypes.map((type, idx) => (
                      <button
                        type="button"
                        key={idx}
                        onClick={() => {
                          setConsultationType(type);
                          setSelectedDay("");
                          setSelectedSlot("");
                        }}
                        className={`px-4 py-2 rounded-lg border ${
                          consultationType === type
                            ? "bg-blue-500 text-white border-blue-600"
                            : "bg-gray-100 hover:bg-gray-200 border-gray-300"
                        }`}
                      >
                        {type} (₹
                        {type === "Video Consultation"
                          ? selectedDoctor.fee.video
                          : selectedDoctor.fee.inperson}
                        )
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Day Selection */}
              {consultationType && (
                <div>
                  <p className="text-lg font-medium mb-2">Available Days</p>
                  <div className="flex gap-3 flex-wrap">
                    {selectedDoctor.availability.map((dayObj, idx) => (
                      <button
                        type="button"
                        key={idx}
                        onClick={() => {
                          setSelectedDay(dayObj.day);
                          setSelectedSlot("");
                        }}
                        className={`px-4 py-2 rounded-lg border ${
                          selectedDay === dayObj.day
                            ? "bg-blue-500 text-white border-blue-600"
                            : "bg-gray-100 hover:bg-gray-200 border-gray-300"
                        }`}
                      >
                        {dayObj.day}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: Slot Selection */}
              {selectedDay && (
                <div>
                  <p className="text-lg font-medium mb-2">Available Slots</p>
                  <div className="grid grid-cols-2 gap-3">
                    {selectedDoctor.availability
                      .find((d) => d.day === selectedDay)
                      ?.slots.map((slot, idx) => (
                        <button
                          type="button"
                          key={idx}
                          onClick={() => setSelectedSlot(slot)}
                          className={`p-3 rounded-lg border text-sm ${
                            selectedSlot === slot
                              ? "bg-blue-500 text-white border-blue-600"
                              : "bg-gray-100 hover:bg-gray-200 border-gray-300"
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                  </div>
                </div>
              )}

              {/* Confirm Button */}
              <button
                type="submit"
                disabled={!selectedSlot}
                className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 disabled:bg-gray-400"
              >
                Confirm Appointment
              </button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default BookAppointment;
