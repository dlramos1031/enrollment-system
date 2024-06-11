import { useState, useEffect } from 'react';
import axios from 'axios';

function Applications() {
  const [applications, setApplications] = useState([]);
  const studentType = ['Freshman', 'Transferee', 'Shiftee', 'Returnee', 'Second Courser'];

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axios.get('http://localhost/enrollmentAPI/fetch_applications.php');
        console.log('API response:', response.data);
        setApplications(response.data);
      } catch (error) {
        console.error('Error fetching applications:', error);
      }
    };
    fetchApplications();
  }, []);  

  const handleAccept = async (id) => {
    try {
      const response = await axios.post('http://localhost/enrollmentAPI/accept_application.php', { id });
      if (response.data.status === 'success') {
        setApplications(applications.filter(application => application.application_id !== id));
      } else {
        console.error('Error accepting application:', response.data.message);
      }
    } catch (error) {
      console.error('Error accepting application:', error);
    }
  };

  const handleReject = async (id) => {
    try {
      const response = await axios.post('http://localhost/enrollmentAPI/reject_application.php', { id });
      if (response.data.status === 'success') {
        setApplications(applications.filter(application => application.application_id !== id));
      } else {
        console.error('Error rejecting application:', response.data.message);
      }
    } catch (error) {
      console.error('Error rejecting application:', error);
    }
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
              <th className="px-4 py-2 border-b-2">Contact Number</th>
              <th className="px-4 py-2 border-b-2">Application Date</th>
              <th className="px-4 py-2 border-b-2">Applied Program</th>
              <th className="px-4 py-2 border-b-2">Student Type</th>
              <th className="px-4 py-2 border-b-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {applications.map(application => (
              <tr key={application.application_id} className="border-b">
                <td className="px-4 py-2">{application.student_id}</td>
                <td className="px-4 py-2">{application.full_name}</td>
                <td className="px-4 py-2">{application.email}</td>
                <td className="px-4 py-2">{application.phone}</td>
                <td className="px-4 py-2">{new Date(application.application_date).toLocaleDateString()}</td>
                <td className="px-4 py-2">{application.program_name}</td>
                <td className="px-4 py-2">{studentType[application.student_type]}</td>
                <td className="px-4 py-2">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleAccept(application.application_id)}
                      className="px-4 py-2 bg-green-600 text-white font-semibold rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                      Confirm
                    </button>
                    <button
                      onClick={() => handleReject(application.application_id)}
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
