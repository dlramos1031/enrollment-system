import { useNavigate } from "react-router-dom";
import { useUser } from "../contexts/UserContext";

const DashboardMain = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  const roles = ['Guest', 'Student', 'Admission Staff', 'Department Head', 'Registrar', 'Admin'];

  const handleProfileNavigation = () => {
    navigate("/dashboard/profile");
  };

  return (
    <div className="p-6 bg-gray-200 shadow-md rounded-md max-w-5xl mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        Hello there!
      </h2>
      <div className="text-lg text-gray-700">
        <p>
          Your role: <span className="text-green-700">{roles[user.role]}</span>
        </p>
      </div>
      {user.role === 0 ? (
        <div className="text-lg text-gray-700">
          <p>
            Start by setting up your{" "}
            <span
              onClick={handleProfileNavigation}
              className="text-indigo-600 cursor-pointer hover:underline"
            >
              Profile
            </span>.
          </p>
          <p>
            After setting up, please wait for the Admission Staff to verify your
            credentials.
          </p>
        </div>
      ) : user.role === 1 ? (
        <div className="text-lg text-gray-700">
          {/* Add content for role 1 here */}
          <p>Welcome to the admin dashboard.</p>
        </div>
      ) : user.role === 2 ? (
        <div className="text-lg text-gray-700">
          {/* Add content for role 2 here */}
          <p>Welcome to the staff dashboard.</p>
        </div>
      ) : (
        <div className="text-lg text-gray-700">
          {/* Default content or message for roles that don't match above cases */}
          <p>Welcome to the dashboard.</p>
        </div>
      )}
    </div>
  );
};

export default DashboardMain;
