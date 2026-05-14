"use client";

import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import StatsCard from "../../components/StatsCard";
import LeadTable from "../../components/LeadTable";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn =
      localStorage.getItem("isAdminLoggedIn");

    if (!isLoggedIn) {
      router.push("/login");
    }
  }, [router]);

  return (
    <main className="flex min-h-screen bg-slate-950 text-white">
      <Sidebar />

      <section className="flex-1 p-8">
        <Topbar />

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
          <StatsCard title="Properties" value="245" />
          <StatsCard title="Leads" value="1245" />
          <StatsCard title="Agents" value="32" />
          <StatsCard title="Appointments" value="89" />
        </div>

        <div className="mt-10">
          <LeadTable />
        </div>
      </section>
    </main>
  );
}