import React from "react";
import { useState, useMemo } from "react";
import FiltersBar from "../../components/Doctor/doctorfilterbar";
import SearchInput from "../../components/Common/searchinput";
import { appointments } from "../../data/doctor/mockdata";
import { patients } from "../../data/doctor/mockdata";
import { prescriptions } from "../../data/doctor/mockdata";
import Badge from "../../components/Common/Badge";
import Modal from "../../components/Common/Modal";
import doctorappointmentcard from "../../components/Doctor/doctorappointmentcard";

const doctorappointments = () => {
  const [q, setq] = useState("");
  const [type, settype] = useState("All");
  const [range, setrange] = useState("Upcoming");
  const [open, setopen] = useState(false);
  const [current, setcurrent] = useState(null);

  const list = useMemo(() => {
    return appointments.filter((a) => {
      const matchQ = a.patientName.toLowerCase().includes(q.toLowerCase());
      const matchtype = type === "All" || a.type === type;
      const matchrange = true;
      return matchQ && matchtype && matchrange;
    });
  }, [q, type, range]);

  const openDetails = (appt) => {
    const patient = patients.filter((p) => p.id === appt.patientId);
    const Prescriptions = prescriptions.filter(
      (pr) => pr.patientId === appt.patientId
    );
    setcurrent({ appt, patient, prescriptions });
    setopen(true);
  };
  return (
    <>
      <FiltersBar>
        <div className="flex gap-2 flex-wrap">
          <SearchInput
            value={q}
            onChange={setq}
            placeholder="Search patient..."
          />
          <select
            className="border rounded-lg px-3 py-2"
            value={type}
            onChange={(e) => settype(e.target.value)}
          >
            <option>All</option>
            <option>Video Consultation</option>
            <option>In-person</option>
          </select>
          <select
            className="border rounded-lg px-3 py-2"
            value={range}
            onChange={(e) => setrange(e.target.value)}
          >
            <option>Today</option>
            <option>Upcoming</option>
            <option>Past</option>
          </select>
        </div>
      </FiltersBar>
    </>
  );
};

export default doctorappointments;
