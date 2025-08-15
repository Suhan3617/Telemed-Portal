export default function SearchInput({ value, onChange, placeholder="Search..." }) {
  return (
    <input
      className="w-full md:w-80 bg-white border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
      value={value}
      onChange={(e)=>onChange(e.target.value)}
      placeholder={placeholder}
    />
  );
}
