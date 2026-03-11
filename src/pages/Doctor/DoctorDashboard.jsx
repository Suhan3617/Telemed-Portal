import React from "react";
import { motion } from "framer-motion";
import {
  CalendarDays,
  Users,
  Sparkles,
  ChevronRight,
  Clock,
  Plus
} from "lucide-react";
import PremiumHeader from "../../components/Doctor/allpagesheader";
import Messagepanel from "../../components/Doctor/dashboard_page/messagepanel";
import Appointmentcalendar from "../../components/Doctor/dashboard_page/appointmentcalendar";
import { appointments, records } from "../../data/doctor/mockdata";
import Appointmentstatscard from "../../components/Doctor/dashboard_page/appointmentstatscard";

const DoctorDashboardPremium = () => {
  const todayAppointments = appointments.filter(
    (a) => a.status === "Scheduled"
  ).length;
  const pendingLabResults = records.filter(
    (r) => r.status === "Pending"
  ).length;
  const upcomingFollowUps =
    appointments.filter(
      (a) =>
        a.status === "Scheduled" && a.type?.toLowerCase().includes("follow")
    ).length || 3;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-br from-blue-500/40 via-sky-200/60 to-indigo-200/70 rounded-3xl p-6 text-slate-900"
    >
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="mx-auto max-w-[1400px]"
      >
        {/* 🩺 Integrated Premium Header */}
        <PremiumHeader
          breadcrumb="Dashboard"
          icon="🩺"
          title="Doctor Overview"
          subtitle="Manage appointments, patients, and teleconsultations easily."
        />

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.6 }}
          className="mt-4 grid grid-cols-1 lg:grid-cols-12 gap-6"
        >
          {/* LEFT COLUMN: Stats & Main Calendar (Large) */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            
            {/* Summary Cards */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.6 }}
              whileHover={{ scale: 1.005 }}
            >
              <Appointmentstatscard
                todayAppointments={todayAppointments}
                pendingLabResults={pendingLabResults}
                upcomingFollowUps={upcomingFollowUps}
              />
            </motion.div>

            {/* Main Calendar Section - Now expanded */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="rounded-3xl bg-white border border-slate-200 shadow-xl overflow-hidden min-h-[600px]"
            >
              <div className="p-2 h-full">
                <Appointmentcalendar />
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Sidebar (Actions, Notifications, Messages) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="lg:col-span-4 flex flex-col gap-6"
          >
            {/* Quick Actions */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="rounded-2xl p-5 bg-white border border-slate-200 shadow-md"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-slate-800">Quick Actions</h3>
                <Sparkles className="text-blue-500 w-5 h-5" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button className="flex flex-col items-center justify-center p-4 rounded-xl bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white transition group">
                  <Plus className="mb-1" size={20} />
                  <span className="text-xs font-bold uppercase tracking-wider">New</span>
                </button>
                <button className="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-50 text-slate-600 hover:bg-indigo-600 hover:text-white transition">
                  <CalendarDays className="mb-1" size={20} />
                  <span className="text-xs font-bold uppercase tracking-wider">Reports</span>
                </button>
              </div>
              
              <button className="w-full mt-3 py-3 rounded-xl border-2 border-dashed border-slate-200 text-slate-500 font-medium hover:border-blue-400 hover:text-blue-500 transition">
                Reschedule Session
              </button>
            </motion.div>

            {/* Notifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18, duration: 0.6 }}
              className="rounded-2xl p-5 bg-white border border-slate-200 shadow-md"
            >
              <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Recent Alerts</h4>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3 p-2 rounded-lg hover:bg-slate-50 transition">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-lg">🔬</div>
                  <div>
                    <p className="text-sm text-slate-800 font-medium leading-tight">Lab result pending: John D.</p>
                    <p className="text-xs text-slate-400 mt-1 flex items-center gap-1"><Clock size={10}/> 2h ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-2 rounded-lg hover:bg-slate-50 transition">
                  <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center text-lg">📅</div>
                  <div>
                    <p className="text-sm text-slate-800 font-medium leading-tight">Upcoming: Meera P.</p>
                    <p className="text-xs text-slate-400 mt-1 flex items-center gap-1"><Clock size={10}/> Today, 11:30 AM</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Message Panel */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="rounded-3xl bg-white border border-slate-200 shadow-md overflow-hidden flex-1 min-h-[400px]"
            >
              <Messagepanel />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default DoctorDashboardPremium;