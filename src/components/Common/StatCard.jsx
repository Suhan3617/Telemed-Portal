export default function StatCard({ title, value, chipClass }) {
  return (
    <div className="p-5 rounded-xl shadow bg-white flex flex-col items-center">
      <div className={`px-3 py-1 rounded-full text-sm font-semibold ${chipClass}`}>
        {title}
      </div>
      <div className="mt-2 text-2xl font-bold">{value}</div>
    </div>
  );
}
