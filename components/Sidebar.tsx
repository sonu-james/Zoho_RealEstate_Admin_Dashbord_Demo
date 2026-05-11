
import Link from "next/link";
import {
  LayoutDashboard,
  Building2,
  Users,
  Bell,
  Calendar,
  Database,
} from "lucide-react";

export default function Sidebar() {
  const menu = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Properties",
      href: "/dashboard/properties",
      icon: Building2,
    },
    {
      name: "Leads",
      href: "/dashboard/leads",
      icon: Users,
    },
    {
      name: "Appointments",
      href: "/dashboard/appointments",
      icon: Calendar,
    },
    {
      name: "Notifications",
      href: "/dashboard/notifications",
      icon: Bell,
    },
    {
      name: "CRM Logs",
      href: "/dashboard/logs",
      icon: Database,
    },
  ];

  return (
    <aside className="w-72 min-h-screen bg-slate-950 border-r border-slate-800 p-6">
      <h1 className="text-3xl font-bold text-yellow-500 mb-10">
        Dubai CRM
      </h1>

      <div className="space-y-3">
        {menu.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-800 transition"
          >
            <item.icon size={20} />
            <span>{item.name}</span>
          </Link>
        ))}
      </div>
    </aside>
  );
}
