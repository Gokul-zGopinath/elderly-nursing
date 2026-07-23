import { useEffect, useState } from "react";
import { getPatients } from "../../services/patientService";

const Patients = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      const { data } = await getPatients();
      setPatients(data.patients);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Patients</h1>

      <table className="w-full border border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Name</th>
            <th className="border p-2">Gender</th>
            <th className="border p-2">Blood Group</th>
            <th className="border p-2">Condition</th>
          </tr>
        </thead>

        <tbody>
          {patients.map((patient) => (
            <tr key={patient._id}>
              <td className="border p-2">{patient.name}</td>
              <td className="border p-2">{patient.gender}</td>
              <td className="border p-2">{patient.bloodGroup}</td>
              <td className="border p-2">{patient.medicalCondition}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Patients;