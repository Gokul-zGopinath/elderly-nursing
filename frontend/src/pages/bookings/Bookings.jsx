import { useEffect, useState } from "react";
import { getBookings } from "../../services/bookingService";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    const { data } = await getBookings();
    setBookings(data.bookings);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Bookings</h1>

      <table className="w-full border border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Patient</th>
            <th className="border p-2">Caregiver</th>
            <th className="border p-2">Service</th>
            <th className="border p-2">Status</th>
          </tr>
        </thead>

        <tbody>
          {bookings.map((b) => (
            <tr key={b._id}>
              <td className="border p-2">{b.patient?.name}</td>
              <td className="border p-2">{b.caregiver?.name}</td>
              <td className="border p-2">{b.service?.serviceName}</td>
              <td className="border p-2">{b.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Bookings;