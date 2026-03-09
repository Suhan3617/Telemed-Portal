import { useEffect, useState } from "react";
import io from "socket.io-client";

// Replace with your backend URL
const socket = io("http://localhost:5000");

export const useChat = (selectedPatientId) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (!selectedPatientId) return;

    // Join the specific room for this patient-doctor pair
    socket.emit("join_chat", { roomId: selectedPatientId });

    // Listen for incoming messages
    const handleMessage = (data) => {
      if (data.senderId !== "doctor_123") { // Don't duplicate if it's from me
        setMessages((prev) => [...prev, { ...data, isMe: false }]);
      }
    };

    socket.on("receive_message", handleMessage);

    return () => {
      socket.off("receive_message", handleMessage);
    };
  }, [selectedPatientId]);

  const sendMessage = (text) => {
    if (!text.trim() || !selectedPatientId) return;

    const newMessage = {
      roomId: selectedPatientId,
      senderId: "doctor_123", // Actual Doctor ID from Auth
      text: text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    socket.emit("send_message", newMessage);
    setMessages((prev) => [...prev, { ...newMessage, isMe: true }]);
  };

  return { messages, sendMessage, setMessages };
};