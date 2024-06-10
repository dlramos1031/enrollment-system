import { useState, useEffect } from 'react';
import axios from 'axios';

function ProfileList() {
  const [profiles, setProfiles] = useState([]);
  const [filter, setFilter] = useState({ role: '1', status: '0' }); // Default to showing students who are enrolled

  useEffect(() => {
    console.log(profiles);
    const fetchProfiles = async () => {
      try {
        const response = await axios.get(`http://localhost/enrollmentAPI/fetch_profiles.php?role=${filter.role}&status=${filter.status}`);
        setProfiles(response.data);
      } catch (error) {
        console.error('Error fetching profiles:', error);
      }
    };

    fetchProfiles();
  }, [filter]);

  const handleRoleToggle = async (profile) => {
    const newRole = profile.role === 0 ? 1 : 0;
    try {
      const response = await axios.post('http://localhost/enrollmentAPI/update_role.php', {
        user_id: profile.user_id, 
        role: newRole,
      });
      if (response.data.success) {
        setProfiles(profiles.map(p => 
          p.student_id === profile.student_id ? { ...p, role: newRole } : p
        ));
      } else {
        console.error('Error updating role:', response.data.error);
      }
    } catch (error) {
      console.error('Error updating role:', error);
    }
  };

  const handleRoleFilterChange = (e) => {
    setFilter({ ...filter, role: e.target.value });
  };

  const handleStatusFilterChange = (e) => {
    setFilter({ ...filter, status: e.target.value });
  };

  return (
    <div className="p-6 bg-gray-200 shadow-md rounded-md max-w-5xl mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Profiles</h2>

      <div className="mb-4">
        <label className="mr-2">Role:</label>
        <select value={filter.role} onChange={handleRoleFilterChange} className="mr-4 p-2 border border-gray-300 rounded-md">
          <option value="0">Guest</option>
          <option value="1">Student</option>
        </select>

        <label className="mr-2">Status:</label>
        <select value={filter.status} onChange={handleStatusFilterChange} className="p-2 border border-gray-300 rounded-md">
          <option value="0">Not yet applied</option>
          <option value="1">Applied</option>
          <option value="2">Pending enrollment</option>
          <option value="3">Enrolled</option>
        </select>
      </div>

      {profiles.length > 0 ? (
        <table className="min-w-full bg-white rounded-md shadow">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b-2">Student ID</th>
              <th className="px-4 py-2 border-b-2">Full Name</th>
              <th className="px-4 py-2 border-b-2">Contact Number</th>
              <th className="px-4 py-2 border-b-2">Email Address</th>
              <th className="px-4 py-2 border-b-2">Home Address</th>
              <th className="px-4 py-2 border-b-2">Role</th>
            </tr>
          </thead>
          <tbody>
            {profiles.map(profile => (
              <tr key={profile.student_id} className="border-b">
                <td className="px-4 py-2">{profile.student_id}</td>
                <td className="px-4 py-2">
                  {profile.first_name} {profile.middle_initial}. {profile.last_name} {profile.suffix}
                </td>
                <td className="px-4 py-2">{profile.contact_number}</td>
                <td className="px-4 py-2">{profile.email_address}</td>
                <td className="px-4 py-2">{profile.home_address}</td>
                <td className="px-4 py-2">
                  {profile.status === 0 ? (
                    <button
                      onClick={() => handleRoleToggle(profile)}
                      className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      {profile.role === 0 ? 'Set as Student' : 'Set as Guest'}
                    </button>
                  ) : (
                    profile.role === '0' ? 'Guest' : 'Student'
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-gray-700">No profiles found.</p>
      )}
    </div>
  );
}

export default ProfileList;
