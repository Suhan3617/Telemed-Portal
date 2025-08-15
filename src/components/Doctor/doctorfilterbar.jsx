export default function FiltersBar({ children }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow flex flex-col md:flex-row md:items-center md:justify-between gap-3">
      {children}
    </div>
  );
}
