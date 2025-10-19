import { motion } from 'framer-motion';

const IconWrapper = ({ children, className = '', onClick }) => (
  <motion.div
    whileHover={{ scale: 1.1, boxShadow: '0 0 15px rgba(59, 130, 246, 0.5)' }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className={`p-3 rounded-full bg-white shadow-xl cursor-pointer text-blue-600 ring-4 ring-blue-200/50 ${className}`}
  >
    {children}
  </motion.div>
);

export default IconWrapper;
