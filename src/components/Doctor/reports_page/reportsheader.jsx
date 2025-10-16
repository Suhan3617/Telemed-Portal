import React from "react";
import { motion } from "framer-motion";

const DoctorReportsHeader = () => (
  <motion.h1
    initial={{ opacity: 0, y: -30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-4xl font-bold text-blue-700 text-center mb-8"
  >
    Medical Records & Reports
  </motion.h1>
);

export default DoctorReportsHeader;
