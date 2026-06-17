"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import LeadDetailsModal from "../../../components/LeadDetailsModal";
import Topbar from "../../../components/Topbar";
import Sidebar from "../../../components/Sidebar";

export default function LeadsPage() {

    const [leads, setLeads] = useState([]);
    const [selectedLead, setSelectedLead] = useState<any>(null);

    useEffect(() => {
        fetchLeads();
    }, []);

    const fetchLeads = async () => {
        try {
            const res = await axios.get("http://localhost:5000/api/leads"
            );
            setLeads(
                res.data
            );
        }
        catch (error) {
            console.log(error);
        }
    };


    return (

        <main className="flex min-h-screen bg-slate-950 text-white">

            <Sidebar />

            <section className="flex-1 p-8">

                <Topbar />

                <div className="p-8">

                    <h1 className="text-4xl font-bold mb-10">
                        Leads
                    </h1>

                    <div className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800">

                        <table className="w-full">

                            <thead>

                                <tr className="border-b border-slate-700 bg-slate-800">

                                    <th className="p-4 text-left">Name</th>

                                    <th className="p-4 text-left">Email</th>

                                    <th className="p-4 text-left">Phone</th>

                                    <th className="p-4 text-left">Message</th>
                                    <th className="p-4 text-left">Status</th>
                                    <th className="p-4 text-left">Date</th>
                                    <th className="p-4 text-left">Actions</th>

                                </tr>

                            </thead>

                            <tbody>

                                {leads.map((lead: any) => (

                                    <tr
                                        key={lead._id}
                                        className="border-b border-slate-800 hover:bg-slate-800/50"
                                    >

                                        <td className="p-4">
                                            {lead.name}
                                        </td>

                                        <td className="p-4">
                                            {lead.email}
                                        </td>

                                        <td className="p-4">
                                            {lead.phone}
                                        </td>

                                        <td className="p-4">
                                            {lead.message}
                                        </td>
                                        <td className="p-4">
                                            {lead.status}
                                        </td>
                                        <td className="p-4">
                                            {new Date(lead.createdAt).toLocaleDateString()}
                                        </td>
                                        <td className="p-4">
                                            <button
                                                onClick={() => setSelectedLead(lead)}
                                                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg"
                                            >
                                                View
                                            </button>
                                        </td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    </div>

                </div>

            </section>

        </main>
    );
}