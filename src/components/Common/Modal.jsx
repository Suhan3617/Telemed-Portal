export default function Modal({ open, onClose, title, children }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between border-b p-4">
          <h3 className="font-semibold">{title}</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">✕</button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}
