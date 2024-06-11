import axios from 'axios';
import { useState, useEffect } from 'react';
import { useUser } from '../contexts/UserContext';

function Profile() {
  const { user } = useUser();

  // Initialize state for form inputs and mode
  const [formData, setFormData] = useState({
    first_name: '',
    middle_name: '',
    last_name: '',
    suffix: '',
    date_of_birth: '',
    gender: '',
    email_address: '',
    contact_number: '',
    home_address: ''
  });
  const [mode, setMode] = useState('view'); // 'view' or 'edit'

  // Fetch data from the server when component mounts
  useEffect(() => {
    const fetchProfile = async () => {
      if (user && user.user_id) {
        try {
          const response = await axios.get(`http://localhost/enrollmentAPI/fetch_profile.php?user_id=${user.user_id}`);
          const data = response.data;
          console.log("fetch: ", data);
          // Update the state with fetched data
          setFormData({
            first_name: data.first_name,
            middle_name: data.middle_name,
            last_name: data.last_name,
            suffix: data.suffix,
            date_of_birth: data.date_of_birth,
            gender: data.gender,
            email_address: data.email_address,
            contact_number: data.contact_number,
            home_address: data.home_address,
          });
        } catch (error) {
          console.error('Error fetching profile data:', error);
        }
      }
    };
    fetchProfile();
  }, [user]);

  // Handle input change and update state
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const confirmSave = window.confirm("Are you sure you want to save the changes?");
    if (confirmSave) {
      try {
        const response = await axios.post('http://localhost/enrollmentAPI/update_profile.php', { ...formData, user_id: user.user_id });
        console.log("submit: ", formData);
        console.log(response);
        setMode('view');
      } catch (error) {
        console.error('Error updating profile:', error);
      }
    }
  };

  // Handle edit mode
  const handleEdit = () => {
    setMode('edit');
  };

  // Handle cancel button
  const handleCancel = async () => {
    setMode('view');
    try {
      const response = await axios.get(`http://localhost/enrollmentAPI/fetch_profile.php?user_id=${user.user_id}`);
      const data = response.data;
      // Update the state with fetched data
      setFormData({
        first_name: data.first_name,
        middle_name: data.middle_name,
        last_name: data.last_name,
        suffix: data.suffix,
        date_of_birth: data.date_of_birth,
        gender: data.gender,
        email_address: data.email_address,
        contact_number: data.contact_number,
        home_address: data.home_address,
      });
    } catch (error) {
      console.error('Error fetching profile data:', error);
    }
  };

  return (
    <div className="p-6 bg-gray-200 shadow-md rounded-md max-w-3xl mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Student Profile</h2>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">First Name</label>
              <input
                type="text"
                id="first_name"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                disabled={mode === 'view'}
                className={`mt-1 block w-full p-2 ${mode === 'view' ? 'bg-gray-100' : 'bg-white'} border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              />
            </div>
            <div>
              <label htmlFor="middle_name" className="block text-sm font-medium text-gray-700">Middle Name</label>
              <input
                type="text"
                id="middle_name"
                name="middle_name"
                value={formData.middle_name}
                onChange={handleChange}
                disabled={mode === 'view'}
                className={`mt-1 block w-full p-2 ${mode === 'view' ? 'bg-gray-100' : 'bg-white'} border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              />
            </div>
            <div>
              <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Last Name</label>
              <input
                type="text"
                id="last_name"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                disabled={mode === 'view'}
                className={`mt-1 block w-full p-2 ${mode === 'view' ? 'bg-gray-100' : 'bg-white'} border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              />
            </div>
            <div>
              <label htmlFor="suffix" className="block text-sm font-medium text-gray-700">Suffix</label>
              <input
                type="text"
                id="suffix"
                name="suffix"
                value={formData.suffix}
                onChange={handleChange}
                disabled={mode === 'view'}
                className={`mt-1 block w-full p-2 ${mode === 'view' ? 'bg-gray-100' : 'bg-white'} border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              />
            </div>
          </div>
          <div>
            <label htmlFor="date_of_birth" className="block text-sm font-medium text-gray-700">Date of Birth</label>
            <input
              type="date"
              id="date_of_birth"
              name="date_of_birth"
              value={formData.date_of_birth}
              onChange={handleChange}
              disabled={mode === 'view'}
              className={`mt-1 block w-full p-2 ${mode === 'view' ? 'bg-gray-100' : 'bg-white'} border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            />
          </div>
          <div>
            <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              disabled={mode === 'view'}
              className={`mt-1 block w-full p-2 ${mode === 'view' ? 'bg-gray-100' : 'bg-white'} border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="email_address" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              id="email_address"
              name="email_address"
              value={formData.email_address}
              onChange={handleChange}
              disabled={mode === 'view'}
              className={`mt-1 block w-full p-2 ${mode === 'view' ? 'bg-gray-100' : 'bg-white'} border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            />
          </div>
          <div>
            <label htmlFor="contact_number" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              id="contact_number"
              name="contact_number"
              value={formData.contact_number}
              onChange={handleChange}
              disabled={mode === 'view'}
              className={`mt-1 block w-full p-2 ${mode === 'view' ? 'bg-gray-100' : 'bg-white'} border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="home_address" className="block text-sm font-medium text-gray-700">Home Address</label>
            <input
              type="text"
              id="home_address"
              name="home_address"
              value={formData.home_address}
              onChange={handleChange}
              disabled={mode === 'view'}
              className={`mt-1 block w-full p-2 ${mode === 'view' ? 'bg-gray-100' : 'bg-white'} border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            />
          </div>
        </div>
        <div className="mt-6 flex justify-end">
          {mode === 'view' ? (
            <button
              type="button"
              id="view"
              onClick={handleEdit}
              disabled={user.user_id === 1}
              className={`px-4 py-2 mx-1 ${user.user_id !== 1 ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-gray-400 text-white'} font-semibold rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
            >
              Edit
            </button>
          ) : (
            <>
              <button
                type="button"
                id="save"
                onClick={handleSubmit}
                className="px-4 py-2 mx-1 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Save
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="px-4 py-2 mx-1 bg-gray-600 text-white font-semibold rounded-md shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                Cancel
              </button>
            </>
          )}
        </div>
      </form>
    </div>
  );
}

export default Profile;
