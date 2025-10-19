import React from "react";
import { motion } from "framer-motion";
import {
  CalendarDays,
  Users,
  Sparkles,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import PremiumHeader from "../../components/Doctor/allpagesheader";
import Upcomingappointments from "../../components/Doctor/dashboard_page/upcomingappointments";
import Teleconsultationtrend from "../../components/Doctor/dashboard_page/teleconsultationtrend";
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
          {/* Summary Cards */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.6 }}
            whileHover={{ scale: 1.01 }}
            className="lg:col-span-8"
          >
            <Appointmentstatscard
              todayAppointments={todayAppointments}
              pendingLabResults={pendingLabResults}
              upcomingFollowUps={upcomingFollowUps}
            />
          </motion.div>

          {/* Quick Actions + Notifications */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="lg:col-span-4 flex flex-col gap-4"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="rounded-2xl p-4 bg-white border border-slate-200 shadow-md hover:shadow-lg transition"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">Quick Actions</p>
                  <h3 className="text-lg font-semibold text-blue-600">
                    Take Action
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <button className="px-3 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition">
                    New Appointment
                  </button>
                  <button className="px-3 py-2 rounded-lg border border-slate-200 text-sm text-slate-700 hover:bg-slate-50 transition">
                    Export
                  </button>
                </div>
              </div>

              <div className="mt-4 flex gap-2">
                <button className="flex-1 rounded-lg p-3 bg-slate-100 hover:bg-blue-100 text-slate-700 transition">
                  Reschedule
                </button>
                <button className="flex-1 rounded-lg p-3 bg-slate-100 hover:bg-blue-100 text-slate-700 transition">
                  Message
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className="rounded-2xl p-4 bg-white border border-slate-200 shadow-md hover:shadow-lg transition"
            >
              <h4 className="text-sm text-slate-500">Notifications</h4>
              <div className="mt-3 flex flex-col gap-3">
                <div className="flex items-start gap-3">
                  <div className="h-9 w-9 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                    🔬
                  </div>
                  <div>
                    <p className="text-sm text-slate-800">
                      Lab result pending for{" "}
                      <span className="font-semibold">John D.</span>
                    </p>
                    <p className="text-xs text-slate-400">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-9 w-9 rounded-lg bg-amber-100 flex items-center justify-center">
                    📅
                  </div>
                  <div>
                    <p className="text-sm text-slate-800">
                      Appointment reminder:{" "}
                      <span className="font-semibold">Meera P.</span>
                    </p>
                    <p className="text-xs text-slate-400">Today, 11:30 AM</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Upcoming Appointments */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-8 grid grid-cols-1 gap-6"
          >
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 250 }}
              className="rounded-3xl bg-white border border-slate-200 shadow-md hover:shadow-lg transition"
            >
              <div className="overflow-hidden rounded-2xl">
                <Upcomingappointments appointments={appointments} />
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 250 }}
              className="rounded-3xl bg-white border border-slate-200 shadow-md hover:shadow-lg transition"
            >
              <Teleconsultationtrend />
            </motion.div>
          </motion.div>

          {/* Messages + Calendar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="lg:col-span-4 flex flex-col gap-6"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="rounded-3xl bg-white border border-slate-200 shadow-md hover:shadow-lg transition"
            >
              <Messagepanel />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="rounded-3xl bg-white border border-slate-200 shadow-md hover:shadow-lg transition"
            >
              <div className="rounded-xl overflow-hidden border border-slate-200">
                <Appointmentcalendar />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default DoctorDashboardPremium;
