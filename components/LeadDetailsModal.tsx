"use client";

interface LeadDetailsModalProps {
  lead: any;
  onClose: () => void;
}

export default function LeadDetailsModal({
  lead,
  onClose,
}: LeadDetailsModalProps) {
  if (!lead) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

      <div className="bg-slate-900 text-white rounded-2xl p-8 w-full max-w-xl border border-slate-700">

        <div className="flex justify-between items-center mb-6">

          <h2 className="text-2xl font-bold">
            Lead Details
          </h2>

          <button
            onClick={onClose}
            className="text-red-500 text-xl"
          >
            ✕
          </button>

        </div>

        <div className="space-y-4">

          <div>
            <p className="text-slate-400">Name</p>
            <p>{lead.name}</p>
          </div>

          <div>
            <p className="text-slate-400">Email</p>
            <p>{lead.email}</p>
          </div>

          <div>
            <p className="text-slate-400">Phone</p>
            <p>{lead.phone}</p>
          </div>

          <div>
            <p className="text-slate-400">Message</p>
            <p>{lead.message}</p>
          </div>

          <div>
            <p className="text-slate-400">Status</p>
            <p>{lead.status}</p>
          </div>

          <div>
            <p className="text-slate-400">Created At</p>
            <p>
              {new Date(
                lead.createdAt
              ).toLocaleString()}
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}