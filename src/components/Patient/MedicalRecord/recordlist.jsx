import React, { useState } from "react";
import Recordfilter from "./recordfilter";
import Recordcard from "./recordcard";
import { motion, AnimatePresence } from "framer-motion";

const Recordlist = ({ records }) => {
  const [filter, setFilter] = useState("All");

  const filteredRecords =
    filter === "All" ? records : records.filter((r) => r.type === filter);

  return (
    <div className="mt-8">
      <Recordfilter filter={filter} setFilter={setFilter} />

      <motion.div
        layout
        className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8 mt-8 place-items-center"
      >
        <AnimatePresence>
          {filteredRecords.map((record) => (
            <motion.div
              key={record.id}
              layout
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="w-full"
            >
              <Recordcard record={record} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Recordlist;
