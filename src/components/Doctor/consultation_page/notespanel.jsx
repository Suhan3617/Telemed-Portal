import { motion } from 'framer-motion';

const NotesPanel = ({ content, setContent }) => (
  <div className="p-4 h-[500px]">
    <motion.textarea
      initial={{ scale: 0.98, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      value={content}
      onChange={(e) => setContent(e.target.value)}
      placeholder="Enter your consultation notes, visit summary, subjective/objective findings here..."
      className="w-full h-full min-h-[400px] p-6 text-gray-700 border-2 border-blue-200 rounded-2xl shadow-inner 
                 focus:ring-4 focus:ring-blue-500/30 focus:border-blue-500 transition-all resize-none font-medium"
      style={{ fontFamily: 'Inter, sans-serif' }}
    />
    <p className="mt-3 text-right text-sm text-gray-500 font-semibold">
      Drafting Summary... (Characters: {content.length})
    </p>
  </div>
);

export default NotesPanel;
