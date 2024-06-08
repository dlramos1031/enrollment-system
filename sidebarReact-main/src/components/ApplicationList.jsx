import { useState, useEffect } from 'react';
import axios from 'axios';

function Applications() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axios.get('http://localhost/enrollmentAPI/fetch_applications.php');
        setApplications(response.data);
      } catch (error) {
        console.error('Error fetching applications:', error);
      }
    };

    fetchApplications();
  }, []);

  const handleAccept = async (id) => {
    // Handle accept logic here
    console.log(`Accepted application with ID: ${id}`);
  };

  const handleReject = async (id) => {
    // Handle reject logic here
    console.log(`Rejected application with ID: ${id}`);
  };

  return (
    <div className="p-6 bg-gray-200 shadow-md rounded-md max-w-5xl mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Pending Applications</h2>
      {applications.length > 0 ? (
        <table className="min-w-full bg-white rounded-md shadow">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b-2">ID</th>
              <th className="px-4 py-2 border-b-2">Full Name</th>
              <th className="px-4 py-2 border-b-2">Email Address</th>
              <th className="px-4 py-2 border-b-2">Phone Number</th>
              <th className="px-4 py-2 border-b-2">Application Date</th>
              <th className="px-4 py-2 border-b-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {applications.map(application => (
              <tr key={application.id} className="border-b">
                <td className="px-4 py-2">{application.id}</td>
                <td className="px-4 py-2">{application.firstName + " " + application.lastName}</td>
                <td className="px-4 py-2">{application.email}</td>
                <td className="px-4 py-2">{application.phone}</td>
                <td className="px-4 py-2">{new Date(application.applicationDate).toLocaleDateString()}</td>
                <td className="px-4 py-2">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleAccept(application.id)}
                      className="px-4 py-2 bg-green-600 text-white font-semibold rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => handleReject(application.id)}
                      className="px-4 py-2 bg-red-600 text-white font-semibold rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    >
                      Reject
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-gray-700">No pending applications.</p>
      )}
    </div>
  );
}

export default Applications;
