import { useEffect, useState } from "react";
import { getServices } from "../../services/serviceService";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    const { data } = await getServices();
    setServices(data.services);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Services</h1>

      <table className="w-full border border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Service</th>
            <th className="border p-2">Duration</th>
            <th className="border p-2">Price</th>
          </tr>
        </thead>

        <tbody>
          {services.map((s) => (
            <tr key={s._id}>
              <td className="border p-2">{s.serviceName}</td>
              <td className="border p-2">{s.duration} mins</td>
              <td className="border p-2">₹{s.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Services;