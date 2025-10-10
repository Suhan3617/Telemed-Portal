import React from "react";

const AppointmentForm = ({
  selectedDoctor,
  consultationType,
  setConsultationType,
  selectedDay,
  setSelectedDay,
  selectedSlot,
  setSelectedSlot,
  handleSubmit,
}) => {
  return (
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
  );
};

export default AppointmentForm;
