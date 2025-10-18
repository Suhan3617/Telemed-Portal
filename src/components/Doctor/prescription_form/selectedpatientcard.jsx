import { motion } from "framer-motion";
import { User, Mars, Venus, Calendar, Heart, PlusCircle } from "lucide-react";

const SelectedPatientCard = ({ selectedPatient }) => {

  const getsexIcon = (sex) => {
    if (sex.toLowerCase() === "M") return <Mars className="w-5 h-5 text-blue-500" />;
    if (sex.toLowerCase() === "F") return <Venus className="w-5 h-5 text-pink-500" />;
    return <User className="w-5 h-5 text-gray-500" />;
  };

  const renderBadges = (items, color="blue") => {
    if (!items || items.length === 0) return <span className="text-gray-400">None</span>;
    return items.map((item, index) => (
      <span key={index} className={`inline-block bg-${color}-100 text-${color}-700 px-3 py-1 rounded-full text-xs font-medium`}>
        {item}
      </span>
    ));
  };

  return (
    <motion.div
      className="mt-4 p-6 rounded-3xl shadow-xl text-gray-700
                 bg-gradient-to-tr from-blue-50 via-blue-100 to-blue-200
                 hover:shadow-2xl transition-shadow duration-200"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.3 }}
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <h2 className="text-2xl font-bold text-blue-700">{selectedPatient.name}</h2>
        <div className="flex items-center gap-4 mt-2 md:mt-0 text-gray-600 text-sm">
          <div className="flex items-center gap-1"><User className="w-5 h-5 text-blue-500" /> {selectedPatient.age} yrs</div>
          <div className="flex items-center gap-1">{getsexIcon(selectedPatient.sex)} {selectedPatient.sex}</div>
          <div className="flex items-center gap-1"><Calendar className="w-5 h-5 text-blue-500" /> {selectedPatient.lastVisit}</div>
        </div>
      </div>

      {/* Info Sections */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="font-semibold text-gray-700 flex items-center gap-2"><Heart className="w-5 h-5 text-red-500" /> Chronic Illnesses</h3>
          <div className="mt-2 flex flex-wrap gap-2">
            {renderBadges(selectedPatient.history.chronicIllnesses, "red")}
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-gray-700 flex items-center gap-2"><PlusCircle className="w-5 h-5 text-yellow-500" /> Allergies</h3>
          <div className="mt-2 flex flex-wrap gap-2">
            {renderBadges(selectedPatient.history.allergies, "yellow")}
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-gray-700 flex items-center gap-2"><Calendar className="w-5 h-5 text-blue-500" /> Surgeries</h3>
          <div className="mt-2 flex flex-wrap gap-2">
            {renderBadges(selectedPatient.history.surgeries, "blue")}
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-gray-700 flex items-center gap-2"><User className="w-5 h-5 text-green-500" /> Family History</h3>
          <div className="mt-2 flex flex-wrap gap-2">
            {renderBadges(selectedPatient.history.familyHistory, "green")}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SelectedPatientCard;
