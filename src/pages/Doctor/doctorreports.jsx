import React, { useState, useMemo } from "react";
import DoctorLayout from "../../components/Doctor/doctorsidebar?"; // use your layout import path
import PR_PremiumStats from "../../components/Doctor/reports_page/reportsstats";
import PR_PremiumCard from "../../components/Doctor/reports_page/doctorlabcard";
import PR_PremiumModal from "../../components/Doctor/reports_page/doctorcardmodal";
import PR_PremiumHeader from "../../components/Doctor/reports_page/reportsheader";
import PR_PremiumFilters from "../../components/Doctor/reports_page/doctorfilterbarreport";
import { records as mockRecords} from "../../data/doctor/mockdata";

export default function Doctorreports() {
  const [q, setQ] = useState("");
  const [type, setType] = useState("All");
  const [status, setStatus] = useState("All");
  const [dateRange, setDateRange] = useState("Any");
  const [selected, setSelected] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [data, setData] = useState(mockRecords);

  const filtered = useMemo(()=>{
    return data.filter(r=>{
      const matchQ = (r.patientName + r.title + r.type).toLowerCase().includes(q.toLowerCase());
      const matchType = type === "All" || r.type === type;
      const matchStatus = status === "All" || r.status === status;
      return matchQ && matchType && matchStatus;
    });
  },[data,q,type,status]);

  const stats = {
    total: data.length,
    reviewed: data.filter(d=>d.status==="Reviewed").length,
    pending: data.filter(d=>d.status==="Pending").length,
    common: (()=> {
      const freq = data.reduce((acc,r)=> (acc[r.type]=(acc[r.type]||0)+1,acc),{});
      return Object.keys(freq).sort((a,b)=>freq[b]-freq[a])[0] || "—";
    })()
  };

  const handleView = (r) => { setSelected(r); setModalOpen(true); };
  const markReviewed = (id) => setData(prev => prev.map(d=> d.id===id ? {...d, status:"Reviewed"} : d));

  return (
    <>
      <div className="min-h-screen p-6 bg-gradient-to-b from-blue-50 to-white">
        <PR_PremiumHeader />

        <PR_PremiumStats stats={stats} />

        <PR_PremiumFilters
          q={q} setQ={setQ}
          type={type} setType={setType}
          status={status} setStatus={setStatus}
          dateRange={dateRange} setDateRange={setDateRange}
          resultsCount={filtered.length}
          onClear={()=>{ setQ(""); setType("All"); setStatus("All"); setDateRange("Any"); }}
          onApply={()=>{}}
        />

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {filtered.length === 0 ? (
              <div className="col-span-full p-12 text-center text-slate-500 rounded-2xl bg-white/60">No reports found</div>
            ) : filtered.map(r => (
              <PR_PremiumCard key={r.id} r={r} onView={handleView} onPatient={()=>{}} onNote={()=>{}} />
            ))}
          </div>

          <aside className="space-y-4">
            {/* AI Summary / Recent Uploads / Alerts panels insert here — reuse earlier optional components */}
          </aside>
        </div>

        <PR_PremiumModal open={modalOpen} setOpen={setModalOpen} record={selected} onMarkReviewed={markReviewed} />
      </div>
    </>
  );
}
