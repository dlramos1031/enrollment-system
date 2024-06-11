import { useState, useEffect } from 'react';
import axios from 'axios';
import { useUser } from '../contexts/UserContext';

function Application() {
  const { user } = useUser();
  const [formData, setFormData] = useState({
    collegeDepartment: '',
    degreeProgram: '',
    studentType: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [degreePrograms, setDegreePrograms] = useState([]);
  const [collegeDepartments, setCollegeDepartments] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await axios.get('http://localhost/enrollmentAPI/get_departments.php');
        setCollegeDepartments(response.data);
      } catch (error) {
        console.error('Error fetching departments:', error);
      }
    };
    fetchDepartments();
  }, []);

  useEffect(() => {
    const fetchPrograms = async () => {
      if (formData.collegeDepartment) {
        try {
          const response = await axios.get(`http://localhost/enrollmentAPI/get_programs.php?dept_id=${formData.collegeDepartment}`);
          setDegreePrograms(response.data);
        } catch (error) {
          console.error('Error fetching programs:', error);
        }
      }
    };
    fetchPrograms();
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
      const submissionData = {
        user_id: user.user_id,
        program_id: formData.degreeProgram,
        student_type: formData.studentType
      };
      const response = await axios.post('http://localhost/enrollmentAPI/submit_application.php', submissionData);
      console.log(response.data);
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
                <option key={college.dept_id} value={college.dept_id}>
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
                  <option key={program.program_id} value={program.program_id}>
                    {program.name}
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
              <option value="1">Freshman</option>
              <option value="2">Transferee</option>
              <option value="3">Shiftee</option>
              <option value="4">Second Courser</option>
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
