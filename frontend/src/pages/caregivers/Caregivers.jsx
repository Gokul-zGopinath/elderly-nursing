import { useEffect, useState } from "react";
import { getCaregivers } from "../../services/caregiverService";

const Caregivers = () => {
  const [caregivers, setCaregivers] = useState([]);

  useEffect(() => {
    fetchCaregivers();
  }, []);

  const fetchCaregivers = async () => {
    const { data } = await getCaregivers();
    setCaregivers(data.caregivers);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Caregivers</h1>

      <table className="w-full border border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Name</th>
            <th className="border p-2">Qualification</th>
            <th className="border p-2">Experience</th>
            <th className="border p-2">Phone</th>
          </tr>
        </thead>

        <tbody>
          {caregivers.map((c) => (
            <tr key={c._id}>
              <td className="border p-2">{c.name}</td>
              <td className="border p-2">{c.qualification}</td>
              <td className="border p-2">{c.experienceYears} Years</td>
              <td className="border p-2">{c.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Caregivers;