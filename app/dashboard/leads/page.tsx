"use client";

import { useEffect, useState } from "react";
import axios from "axios";
export default function LeadsPage() {

    const [leads, setLeads] = useState([]);

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

        <div className="p-8 text-white">
            <h1 className="text-4xl font-bold mb-10">Leads</h1>
            <div className="bg-slate-900 rounded-2xl overflow-hidden">
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-slate-700">
                            <th className=" p-4 text-left">Name</th>
                            <th className="p-4 text-left">Email</th>
                            <th className="p-4 text-left">Phone</th>
                            <th className="p-4 text-left">Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            leads.map((lead: any) => (
                                <tr key={lead._id} className="border-b border-slate-800">
                                    <td className="p-4">{lead.name}</td>
                                    <td className="p-4">{lead.email}</td>
                                    <td className="p-4">{lead.phone}</td>
                                    <td className="p-4">{lead.message}</td>
                                </tr>
                            )
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
}