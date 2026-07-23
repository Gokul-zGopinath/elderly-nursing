import { useEffect, useState } from "react";
import { getMedications } from "../../services/medicationService";

const Medications = () => {
  const [medications, setMedications] = useState([]);

  useEffect(() => {
    fetchMedications();
  }, []);

  const fetchMedications = async () => {
    const { data } = await getMedications();
    setMedications(data.medications);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Medications</h1>

      <table className="w-full border border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Patient</th>
            <th className="border p-2">Medicine</th>
            <th className="border p-2">Dosage</th>
            <th className="border p-2">Frequency</th>
          </tr>
        </thead>

        <tbody>
          {medications.map((m) => (
            <tr key={m._id}>
              <td className="border p-2">{m.patient?.name}</td>
              <td className="border p-2">{m.medicineName}</td>
              <td className="border p-2">{m.dosage}</td>
              <td className="border p-2">{m.frequency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Medications;