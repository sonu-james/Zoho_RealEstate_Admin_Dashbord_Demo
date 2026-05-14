"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Building2,
  Users,
  Bell,
  Calendar,
  Database,
  LogOut,
} from "lucide-react";

export default function Sidebar() {
  const router = useRouter();

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

  const handleLogout = () => {
    localStorage.removeItem("isAdminLoggedIn");

    router.push("/login");
  };

  return (
    <aside className="w-72 min-h-screen bg-slate-950 border-r border-slate-800 p-6 flex flex-col justify-between">
      
      <div>
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
      </div>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="flex items-center justify-center gap-3 bg-red-500 hover:bg-red-600 transition text-white py-3 rounded-2xl font-semibold"
      >
        <LogOut size={20} />
        Logout
      </button>
    </aside>
  );
}