
const leads = [
  {
    name: "Ahmed Ali",
    status: "Interested",
    property: "Palm Jumeirah Villa",
  },
  {
    name: "Sarah Khan",
    status: "New",
    property: "Dubai Marina Apartment",
  },
];

export default function LeadTable() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 mt-8">
      <h2 className="text-2xl font-bold mb-6">
        Recent Leads
      </h2>

      <div className="space-y-4">
        {leads.map((lead, index) => (
          <div
            key={index}
            className="flex justify-between bg-slate-800 p-4 rounded-xl"
          >
            <div>
              <h3 className="font-semibold">
                {lead.name}
              </h3>

              <p className="text-gray-400 text-sm">
                {lead.property}
              </p>
            </div>

            <span className="text-yellow-500">
              {lead.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
