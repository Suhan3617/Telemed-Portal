import React, { useEffect, useRef, useState } from "react";
import Button from "../Common/Button";
const doctorchatwindow = ({ current, messages, onSend, onUpload }) => {
  const [text, settext] = useState("");
  const endref = useRef(null);

  useEffect(() => {
    endref.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="bg-white rounded-xl shadow flex flex-col h-[70vh]">
      <div className="p-4 border-b flex items-center gap-3">
        <img src="{current.photo}" className="w-12 h-12 rounded-2xl border" />
        <div>
          <div className="font-semibold">{current.name}</div>
          <div className="text-xs text-gray-500">
            Patient • {current.lastSeen || "online"}
          </div>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((m, i) => (
          <div key={i} className="">
            {m.text && <div className="text-sm">{m.text}</div>}
            {m.file && (
              <a
                className="underline text-sm"
                href={m.file.url}
                target="_blank"
                rel="noreferrer"
              >
                {m.file.name}
              </a>
            )}
            <div className="mt-1 text-[10px] opacity-70">{m.time}</div>
          </div>
        ))}
        <div ref={endref} />
      </div>
      <form
        className="p-3 border-t flex items-center gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          if (!text.trim()) return;
          onSend?.(text);
          settext("");
        }}
      >
        <input
          className="flex-1 border rounded-lg px-3 py-2 outline-none  focus:ring-2 focus:ring-blue-500"
          placeholder="Type a message..."
          value={text}
          onChange={(e)=>{settext(e.target.value)}}
        />
        <label className="cursor-pointer px-3 py-2 rounded-lg bg-gray-200 hover:bg-gray-300">
            Upload
            <input type="file" className="hidden" onChange={(e)=>{onUpload?.(e.target.files?.[0])}} />
        </label>
        <Button type="submit">Send</Button>
      </form>
    </div>
  );
};

export default doctorchatwindow;
