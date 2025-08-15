export default function Button({ className = "", children, ...props }) {
  return (
    <button
      className={`inline-flex items-center justify-center px-4 py-2 rounded-lg text-white bg-blue-500 hover:bg-blue-600 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}