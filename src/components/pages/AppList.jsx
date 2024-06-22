import { useState, useEffect } from "react";
import { fetchApplications, setApplicationStatus } from "../../api";
import { EllipsisVertical, Mail, Phone } from "lucide-react";
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';
import "../../App.css";

function AppList() {
  const [applications, setApplications] = useState([]);
  const studentType = [
    "Freshman",
    "Transferee",
    "Shiftee",
    "Returnee",
    "Second Courser",
  ];

  useEffect(() => {
    const fetchAppList = async () => {
      try {
        setApplications(await fetchApplications());
      } catch (error) {
        console.error("Error fetching applications:", error);
      }
    };
    fetchAppList();
  }, []);

  const handleAccept = async (id) => {
    try {
      await setApplicationStatus(id);
    } catch (error) {
      console.error("Error accepting application:", error);
    }
  };

  const handleReject = async (id) => {
    try {
      const response = "";
      if (response.data.status === "success") {
        setApplications(
          applications.filter(
            (application) => application.application_id !== id
          )
        );
      } else {
        console.error("Error rejecting application:", response.data.message);
      }
    } catch (error) {
      console.error("Error rejecting application:", error);
    }
  };

  return (
    <div className="h-screen p-6 bg-gray-200 shadow-md rounded-md max-w-full m-auto flex flex-col">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        Pending Applications
      </h2>
      {applications.length > 0 ? (
        <div className="flex-1 overflow-y-auto">
          <table className="min-w-full bg-white rounded-md shadow">
            <thead className="sticky top-0 bg-blue-200">
              <tr>
                <th className="px-4 py-2 border-b-2">ID</th>
                <th className="px-4 py-2 border-b-2">Full Name</th>
                <th className="px-4 py-2 border-b-2">Contact Information</th>
                <th className="px-4 py-2 border-b-2">Application Date</th>
                <th className="px-4 py-2 border-b-2">Applied Program</th>
                <th className="px-4 py-2 border-b-2">Student Type</th>
                <th className="px-4 py-2 border-b-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app) => (
                <tr key={app.student_id} className="border-b">
                  <td className="px-4 py-2">{app.student_id}</td>
                  <td className="px-4 py-2">
                    {app.first_name +
                      " " +
                      (app.middle_name ? app.middle_name + " " : " ") +
                      app.last_name +
                      " " +
                      (app.suffix ? app.suffix + " " : " ")}
                  </td>
                  <td className="px-4 py-2">
                    <ul className="custom-list">
                      <li>
                        <Phone size={15} color="green" className="icon" />{" "}
                        {app.contact_number}
                      </li>
                      <li>
                        <Mail size={15} color="blue" className="icon" />{" "}
                        {app.email_address}
                      </li>
                    </ul>
                  </td>
                  <td className="px-4 py-2">
                    {new Date(app.application_date).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-2">{app.name}</td>
                  <td className="px-4 py-2">{studentType[app.student_type]}</td>
                  <td className="px-4 py-2">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleAccept(app.student_id)}
                        className="px-4 py-2 bg-green-600 text-white font-semibold rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                      >
                        Approve
                      </button>
                      <Menu as="div" className="relative inline-block text-left">
                        <MenuButton className="p-2 rounded-full hover:bg-gray-100 focus:outline-none">
                          <EllipsisVertical size={20} />
                        </MenuButton>
                        <MenuItems className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-md shadow-lg focus:outline-none">
                          <MenuItem>
                            {({ active }) => (
                              <button
                                onClick={() => handleReject(app.student_id)}
                                className={`${
                                  active ? 'bg-red-100' : ''
                                } group flex rounded-md items-center w-full px-4 py-2 text-sm text-red-700`}
                              >
                                Reject
                              </button>
                            )}
                          </MenuItem>
                        </MenuItems>
                      </Menu>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-700">No pending applications.</p>
      )}
    </div>
  );
}

export default AppList;
