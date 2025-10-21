import { motion } from 'framer-motion';
import IconWrapper from '../../Common/iconwrapper';
import GlowButton from '../../Common/glowbutton';
import { Plus, Send } from 'lucide-react';

const ChatPanel = ({ messages }) => (
  <div className="h-[500px] flex flex-col justify-between">
    <div className="space-y-4 overflow-y-auto p-4 flex-grow custom-scrollbar">
      {messages.map((msg, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.08 }}
          className={`flex ${msg.from === 'doctor' ? 'justify-end' : 'justify-start'}`}
        >
          <div className={`max-w-[70%] p-4 rounded-2xl shadow-xl transition-all duration-300
            ${msg.from === 'doctor'
              ? 'bg-blue-600 text-white rounded-br-sm'
              : 'bg-white text-gray-800 rounded-tl-sm border border-blue-100'
            }`}
          >
            {msg.text}
            <span className={`block text-xs mt-1 font-light ${msg.from === 'doctor' ? 'text-blue-200' : 'text-gray-400'}`}>
              {msg.time}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
    <div className="p-4 border-t border-blue-100 bg-white rounded-b-2xl">
      <div className="flex items-center space-x-3">
        <input
          type="text"
          placeholder="Send a message or attach a file..."
          className="flex-grow p-4 border-2 border-blue-300/50 rounded-full focus:ring-4 focus:ring-blue-500/50 focus:border-blue-500 transition-all shadow-inner text-gray-700"
        />
        <IconWrapper>
          <Plus size={20} />
        </IconWrapper>
        <GlowButton Icon={Send} color="blue">
          Send
        </GlowButton>
      </div>
    </div>
  </div>
);

export default ChatPanel;
