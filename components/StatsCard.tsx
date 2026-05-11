
interface StatsCardProps {
  title: string;
  value: string;
}

export default function StatsCard({
  title,
  value,
}: StatsCardProps) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
      <p className="text-gray-400">{title}</p>

      <h2 className="text-4xl font-bold mt-4">
        {value}
      </h2>
    </div>
  );
}
