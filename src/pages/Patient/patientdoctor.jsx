import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { doctors } from "../../data/patient/mockdata";
import Pageheader from "../../components/Common/pageheader";
import Patientdoctorfilterbar from "../../components/Patient/doctors/doctorfilterbar";

const PatientDoctor = () => {
  const navigate = useNavigate();
  const currentPatientId = "p3"; // assume logged-in patient
  const [filters, setFilters] = useState({
    name:"",
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
          setFilters({ specialization: "", experience: "", visited: "" })
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
                className="bg-white rounded-xl shadow-md p-4 hover:shadow-xl transition"
              >
                <img
                  src={doc.photo}
                  alt={doc.name}
                  className="w-20 h-20 rounded-full mx-auto border-2 border-blue-400"
                />
                <h2 className="mt-3 text-center font-bold text-gray-800 text-lg">
                  {doc.name}
                </h2>
                <p className="text-sm text-center text-blue-600">
                  {doc.specialization}
                </p>
                <p className="text-xs text-center text-gray-400">{doc.experience}</p>
                <p className="text-xs text-center text-gray-400">{doc.hospital}</p>
                {hasVisited && (
                  <p className="text-xs text-green-600 text-center mt-1 font-medium">
                    ✔ Visited Earlier
                  </p>
                )}

                <div className="mt-4 flex flex-col gap-2">
                  <button
                    onClick={() => navigate(`/book-appointment/${doc.id}`)}
                    className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                  >
                    Book Appointment
                  </button>
                  <button
                    onClick={() => navigate(`/doctors/${doc.id}`)}
                    className="border border-blue-500 text-blue-600 py-2 rounded-lg hover:bg-blue-50 transition"
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
