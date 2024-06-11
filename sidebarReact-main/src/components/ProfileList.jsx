import { useState, useEffect } from 'react';
import axios from 'axios';

function ProfileList() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await axios.get('http://localhost/enrollmentAPI/fetch_profiles.php?role=0');
        setProfiles(response.data);
      } catch (error) {
        console.error('Error fetching profiles:', error);
      }
    };

    fetchProfiles();
  }, []);

  const handleRoleToggle = async (profile) => {
    const newRole = 1; // Set role to 1 (Student)
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
        console.error('Error updating role:', response.data);
      }
    } catch (error) {
      console.error('Error updating role:', error);
    }
  };

  return (
    <div className="p-6 bg-gray-200 shadow-md rounded-md max-w-5xl mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Profiles</h2>

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
                  {profile.role === 0 ? (
                    <button
                      onClick={() => handleRoleToggle(profile)}
                      className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Set as Student
                    </button>
                  ) : (
                    'Student'
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-gray-700">No Guest profiles found.</p>
      )}
    </div>
  );
}

export default ProfileList;
