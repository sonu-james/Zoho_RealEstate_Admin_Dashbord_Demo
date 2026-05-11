
import Sidebar from "../../../components/Sidebar";
import Topbar from "../../../components/Topbar";

const properties = [
  {
    title: "Palm Jumeirah Villa",
    location: "Dubai",
    price: "AED 14M",
    status: "Available",
  },
  {
    title: "Dubai Marina Apartment",
    location: "Dubai Marina",
    price: "AED 6M",
    status: "Sold",
  },
];

export default function PropertiesPage() {
  return (
    <main className="flex">
      <Sidebar />

      <section className="flex-1 p-8">
        <Topbar />

        <div className="flex justify-between items-center mt-8">
          <div>
            <h1 className="text-3xl font-bold">
              Properties
            </h1>

            <p className="text-gray-400 mt-2">
              Manage all properties
            </p>
          </div>

          <button className="bg-yellow-500 text-black px-6 py-3 rounded-xl">
            Add Property
          </button>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 mt-8">
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-400 border-b border-slate-700">
                <th className="pb-4">Property</th>
                <th className="pb-4">Location</th>
                <th className="pb-4">Price</th>
                <th className="pb-4">Status</th>
              </tr>
            </thead>

            <tbody>
              {properties.map((property, index) => (
                <tr
                  key={index}
                  className="border-b border-slate-800"
                >
                  <td className="py-5">{property.title}</td>
                  <td>{property.location}</td>
                  <td>{property.price}</td>

                  <td>
                    <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                      {property.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
