import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { doctors } from "../../data/patient/mockdata";
import Pageheader from "../../components/Common/pageheader";
import Patientdoctorfilterbar from "../../components/Patient/doctors/doctorfilterbar";

const PatientDoctor = () => {
  const navigate = useNavigate();
  const currentPatientId = "p3"; // assume logged-in patient
  const [filters, setFilters] = useState({
    name: "",
    specialization: "",
    experience: "",
    visited: "",
  });

  const specializations = [...new Set(doctors.map((d) => d.specialization))];

  // Filter logic
  const filteredDoctors = useMemo(() => {
    return doctors.filter((doc) => {
      const expYears = parseInt(doc.experience);
      const hasVisited = doc.patientsHandled.includes(currentPatientId);

      const nameMatch =
        !filters.name ||
        doc.name.toLowerCase().includes(filters.name.toLowerCase());

      const expMatch =
        !filters.experience ||
        (filters.experience === "0-5" && expYears <= 5) ||
        (filters.experience === "6-10" && expYears > 5 && expYears <= 10) ||
        (filters.experience === "10+" && expYears > 10);

      const specMatch =
        !filters.specialization || doc.specialization === filters.specialization;

      const visitedMatch =
        !filters.visited ||
        (filters.visited === "yes" && hasVisited) ||
        (filters.visited === "no" && !hasVisited);

      return nameMatch && expMatch && specMatch && visitedMatch;
    });
  }, [filters]);

  return (
    <div className="p-6 bg-blue-50 min-h-screen">
      <Pageheader
        title="Our Doctors"
        subtitle="Book appointments with top specialists"
        breadcrumb={["Home", "Doctors"]}
      />

      <Patientdoctorfilterbar
        specializations={specializations}
        filters={filters}
        setFilters={setFilters}
        onClearFilters={() =>
          setFilters({ name: "", specialization: "", experience: "", visited: "" })
        }
      />

      {filteredDoctors.length === 0 ? (
        <p className="text-center text-gray-600 mt-10">
          No doctors found matching your filters.
        </p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {filteredDoctors.map((doc) => {
            const hasVisited = doc.patientsHandled.includes(currentPatientId);
            return (
              <div
                key={doc.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-blue-100 overflow-hidden"
              >
                {/* Image with blue border gradient */}
                <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 flex justify-center">
                  <img
                    src={doc.photo}
                    alt={doc.name}
                    className="w-24 h-24 rounded-full border-4 border-blue-400 shadow-lg"
                  />
                </div>

                {/* Doctor Info */}
                <div className="p-4 text-center">
                  <h2 className="text-xl font-bold text-gray-800">{doc.name}</h2>
                  <p className="text-sm text-blue-600 mt-1">{doc.specialization}</p>
                  <p className="text-xs text-gray-400 mt-1">{doc.experience}</p>
                  <p className="text-xs text-gray-400">{doc.hospital}</p>

                  {/* Visited Badge */}
                  {hasVisited && (
                    <span className="inline-block mt-2 px-3 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">
                      ✔ Visited Earlier
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="p-4 flex flex-col gap-3">
                  <button
                    onClick={() => navigate(`/book-appointment/${doc.id}`)}
                    className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 rounded-xl shadow-md hover:from-blue-600 hover:to-blue-700 transition-all duration-200 font-semibold"
                  >
                    Book Appointment
                  </button>
                  <button
                    onClick={() => navigate(`/doctors/${doc.id}`)}
                    className="border border-blue-500 text-blue-600 py-2 rounded-xl hover:bg-blue-50 transition-all duration-200 font-medium"
                  >
                    More Details
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default PatientDoctor;
