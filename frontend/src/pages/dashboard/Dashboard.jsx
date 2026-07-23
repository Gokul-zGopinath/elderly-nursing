import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-blue-700 text-white flex justify-between items-center p-5">
        <h1 className="text-2xl font-bold">
          Elderly Nursing Dashboard
        </h1>

        <div className="flex items-center gap-4">
          <span>Welcome, {user?.name}</span>

          <button
            onClick={logout}
            className="bg-red-500 px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-8">

        <Link
          to="/patients"
          className="bg-white shadow rounded-xl p-6 text-center hover:bg-blue-50"
        >
          <h2 className="text-xl font-bold">Patients</h2>
        </Link>

        <Link
          to="/caregivers"
          className="bg-white shadow rounded-xl p-6 text-center hover:bg-blue-50"
        >
          <h2 className="text-xl font-bold">Caregivers</h2>
        </Link>

        <Link
          to="/services"
          className="bg-white shadow rounded-xl p-6 text-center hover:bg-blue-50"
        >
          <h2 className="text-xl font-bold">Services</h2>
        </Link>

        <Link
          to="/bookings"
          className="bg-white shadow rounded-xl p-6 text-center hover:bg-blue-50"
        >
          <h2 className="text-xl font-bold">Bookings</h2>
        </Link>

        <Link
          to="/medications"
          className="bg-white shadow rounded-xl p-6 text-center hover:bg-blue-50"
        >
          <h2 className="text-xl font-bold">Medications</h2>
        </Link>

      </div>
    </div>
  );
};

export default Dashboard;