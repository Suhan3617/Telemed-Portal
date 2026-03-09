import { useEffect, useState } from "react";
import io from "socket.io-client";

// Ensure this matches your backend PORT
const socket = io("http://localhost:5000");

export const useChat = (patientId) => {
  const [chatMessages, setChatMessages] = useState([]);

  useEffect(() => {
    if (!patientId) return;

    // Join the unique room for this patient
    socket.emit("join_chat", { roomId: patientId });

    // Listen for new messages
    const handleNewMessage = (data) => {
      // Only add if it's from the other person
      if (data.sender !== "doctor") {
        setChatMessages((prev) => [...prev, { ...data, isMe: false }]);
      }
    };

    socket.on("receive_message", handleNewMessage);

    return () => {
      socket.off("receive_message", handleNewMessage);
    };
  }, [patientId]);

  const sendMessage = (text) => {
    if (!text.trim() || !patientId) return;

    const newMessage = {
      roomId: patientId,
      sender: "doctor",
      text: text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    socket.emit("send_message", newMessage);
    setChatMessages((prev) => [...prev, { ...newMessage, isMe: true }]);
  };

  return { chatMessages, sendMessage, setChatMessages };
};