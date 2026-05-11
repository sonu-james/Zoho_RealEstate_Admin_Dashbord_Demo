
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import StatsCard from "../../components/StatsCard";
import LeadTable from "../../components/LeadTable";

export default function DashboardPage() {
  return (
    <main className="flex">
      <Sidebar />

      <section className="flex-1 p-8">
        <Topbar />

        <div className="grid md:grid-cols-4 gap-6 mt-8">
          <StatsCard title="Properties" value="245" />
          <StatsCard title="Leads" value="1245" />
          <StatsCard title="Agents" value="32" />
          <StatsCard title="Appointments" value="89" />
        </div>

        <LeadTable />
      </section>
    </main>
  );
}
