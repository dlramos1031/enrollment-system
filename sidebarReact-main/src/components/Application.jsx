import { useState, useEffect } from 'react';
import axios from 'axios';

function Application() {
  const [formData, setFormData] = useState({
    collegeDepartment: '',
    degreeProgram: '',
    studentType: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [degreePrograms, setDegreePrograms] = useState([]);
  const [message, setMessage] = useState('');

  const collegeDepartments = [
    {
      name: 'College of Information Technology and Computing',
      programs: [
        'Information Technology',
        'Computer Science',
        'Data Science',
        'Technology Communications Management'
      ],
    },
    {
      name: 'College of Engineering and Architecture',
      programs: [
        'Civil Engineering',
        'Mechanical Engineering',
        'Electrical Engineering',
        'Architecture'
      ],
    }
  ];

  const studentTypes = ['Freshman', 'Transferee', 'Shiftee', 'Second Courser'];

  useEffect(() => {
    if (formData.collegeDepartment) {
      const selectedCollege = collegeDepartments.find(
        college => college.name === formData.collegeDepartment
      );
      setDegreePrograms(selectedCollege ? selectedCollege.programs : []);
    }
  }, [formData.collegeDepartment]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost/enrollmentAPI/submit_application.php', formData);
      console.log(formData);
      setSubmitted(true);
      setMessage('Please wait for the Admission Staff to handle your application.');
    } catch (error) {
      console.error('Error submitting application:', error);
    }
  };

  return (
    <div className="p-6 bg-gray-200 shadow-md rounded-md max-w-3xl mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Application Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-6">
          <div>
            <label htmlFor="collegeDepartment" className="block text-sm font-medium text-gray-700">College Department</label>
            <select
              id="collegeDepartment"
              name="collegeDepartment"
              value={formData.collegeDepartment}
              onChange={handleChange}
              disabled={submitted}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Select College Department</option>
              {collegeDepartments.map((college) => (
                <option key={college.name} value={college.name}>
                  {college.name}
                </option>
              ))}
            </select>
          </div>

          {degreePrograms.length > 0 && (
            <div>
              <label htmlFor="degreeProgram" className="block text-sm font-medium text-gray-700">Degree Program</label>
              <select
                id="degreeProgram"
                name="degreeProgram"
                value={formData.degreeProgram}
                onChange={handleChange}
                disabled={submitted}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="">Select Degree Program</option>
                {degreePrograms.map((program) => (
                  <option key={program} value={program}>
                    {program}
                  </option>
                ))}
              </select>
            </div>
          )}

          <div>
            <label htmlFor="studentType" className="block text-sm font-medium text-gray-700">Student Type</label>
            <select
              id="studentType"
              name="studentType"
              value={formData.studentType}
              onChange={handleChange}
              disabled={submitted}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Select Student Type</option>
              {studentTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            type="submit"
            disabled={submitted}
            className={`px-4 py-2 mx-1 font-semibold rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 ${submitted ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500'}`}
          >
            {submitted ? 'Submitted' : 'Submit'}
          </button>
        </div>
      </form>
      {message && (
        <div className="mt-4 p-4 bg-blue-100 text-blue-800 rounded-md">
          {message}
        </div>
      )}
    </div>
  );
}

export default Application;
