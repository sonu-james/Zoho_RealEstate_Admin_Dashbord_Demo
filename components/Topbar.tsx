
export default function Topbar() {
  return (
    <div className="flex justify-between items-center bg-slate-900 border border-slate-800 rounded-2xl p-5">
      <div>
        <h2 className="text-2xl font-bold">
          Admin Dashboard
        </h2>

        <p className="text-gray-400">
          Welcome back, Admin
        </p>
      </div>

      <button className="bg-yellow-500 text-black px-6 py-3 rounded-xl font-semibold">
        Add Property
      </button>
    </div>
  );
}
