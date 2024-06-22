import { useState, useEffect } from "react";
import {
  fetchDepartments,
  fetchPrograms,
  fetchRole,
  fetchSessionApplicationStatus,
  fetchStudentProfile,
  submitApplication,
} from "../../api";

function AppForm() {
  const [role, setRole] = useState(0);
  const [status, setStatus] = useState(0);
  const [mode, setMode] = useState("view"); // 'view' or 'edit'
  const [collegeDepartments, setCollegeDepartments] = useState([]);
  const [degreePrograms, setDegreePrograms] = useState([]);
  // Initialize state for form inputs and status
  const [formData, setFormData] = useState({
    // From student profile
    firstName: "",
    middleName: "",
    lastName: "",
    suffix: "",
    dateOfBirth: "",
    gender: "",
    email: "",
    contactNumber: "",
    homeAddress: "",
    // From application
    collegeDepartment: "",
    degreeProgram: "",
    studentType: "",
  });
  const appStatuses = [
    "Waiting for Admin Staff approval",
    "Admin Staff approved / Pending Dept. Head approval",
    "Dept. Head approved / Pending Registrar approval",
    "Registrar approved /  Application accepted",
  ];

  useEffect(() => {
    const fetchDept = async () => {
      try {
        const dept = await fetchDepartments();
        setCollegeDepartments(dept);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDept();
  }, []);

  useEffect(() => {
    const fetchProgram = async () => {
      if (formData.collegeDepartment) {
        try {
          const progs = await fetchPrograms(formData.collegeDepartment);
          setDegreePrograms(progs);
        } catch (error) {
          console.error("Error fetching programs:", error);
        }
      }
    };
    fetchProgram();
  }, [formData.collegeDepartment]);

  useEffect(() => {
    const fetchSessionRole = async () => {
      try {
        const sessionRole = await fetchRole();
        setRole(sessionRole.role);
      } catch (error) {
        console.error("Error fetching role:", error);
      }
    };
    fetchSessionRole();
  }, []);

  useEffect(() => {
    const fetchAppStatus = async () => {
      try {
        const sessionStatus = await fetchSessionApplicationStatus();
        setStatus(sessionStatus.application_status);
      } catch (error) {
        console.error("Error fetching application status:", error);
      }
    };
    fetchAppStatus();
  }, []);

  useEffect(() => {
    const fetchFormData = async () => {
      try {
        const student = await fetchStudentProfile();
        setFormData(student);
      } catch (error) {
        console.error("Error fetching form:", error);
      }
    };
    fetchFormData();
  }, []);

  // Handle input change and update state
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (role === 1) {
      return;
    }
    const confirmSave = window.confirm(
      "Are you sure you want to save the changes?"
    );
    if (confirmSave) {
      try {
        await submitApplication(formData);
        setMode("view");
      } catch (error) {
        console.error("Error updating profile:", error);
      }
    }
  };

  // Handle edit mode
  const handleEdit = () => {
    setMode("edit");
  };

  // Handle cancel button
  const handleCancel = async () => {
    setMode("view");
  };

  return (
    <div className="p-6 bg-gray-200 shadow-md rounded-md max-w-full m-auto">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        Application Form
      </h2>
      <div className="flex flex-row gap-6">
        <form className="basis-2/3 px-10 py-6 bg-blue-100 border-blue-800 border-2 rounded-md">
          <h3 className="px-4 text-xl font-semibold mb-2 text-gray-800">
            Personal Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-10 gap-4">
              <div className="col-span-3">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  disabled={mode === "view"}
                  className={`mt-1 block w-full p-2 ${
                    mode === "view" ? "bg-gray-100" : "bg-white"
                  } border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                />
              </div>
              <div className="col-span-3">
                <label
                  htmlFor="middleName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Middle Name
                </label>
                <input
                  type="text"
                  id="middleName"
                  name="middleName"
                  value={formData.middleName}
                  onChange={handleChange}
                  disabled={mode === "view"}
                  className={`mt-1 block w-full p-2 ${
                    mode === "view" ? "bg-gray-100" : "bg-white"
                  } border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                />
              </div>
              <div className="col-span-3">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  disabled={mode === "view"}
                  className={`mt-1 block w-full p-2 ${
                    mode === "view" ? "bg-gray-100" : "bg-white"
                  } border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                />
              </div>
              <div className="col-span-1">
                <label
                  htmlFor="suffix"
                  className="block text-sm font-medium text-gray-700"
                >
                  Suffix
                </label>
                <input
                  type="text"
                  id="suffix"
                  name="suffix"
                  value={formData.suffix}
                  onChange={handleChange}
                  disabled={mode === "view"}
                  className={`mt-1 block w-full p-2 ${
                    mode === "view" ? "bg-gray-100" : "bg-white"
                  } border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                />
              </div>
            </div>
            <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <label
                  htmlFor="dateOfBirth"
                  className="block text-sm font-medium text-gray-700"
                >
                  Date of Birth
                </label>
                <input
                  type="date"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  disabled={mode === "view"}
                  className={`mt-1 block w-full p-2 ${
                    mode === "view" ? "bg-gray-100" : "bg-white"
                  } border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                />
              </div>
              <div>
                <label
                  htmlFor="gender"
                  className="block text-sm font-medium text-gray-700"
                >
                  Gender
                </label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  disabled={mode === "view"}
                  className={`mt-1 block w-full p-2 ${
                    mode === "view" ? "bg-gray-100" : "bg-white"
                  } border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={mode === "view"}
                  className={`mt-1 block w-full p-2 ${
                    mode === "view" ? "bg-gray-100" : "bg-white"
                  } border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                />
              </div>
              <div>
                <label
                  htmlFor="contactNumber"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="contactNumber"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  disabled={mode === "view"}
                  className={`mt-1 block w-full p-2 ${
                    mode === "view" ? "bg-gray-100" : "bg-white"
                  } border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                />
              </div>
            </div>
            <div className="md:col-span-2">
              <label
                htmlFor="homeAddress"
                className="block text-sm font-medium text-gray-700"
              >
                Home Address
              </label>
              <input
                type="text"
                id="homeAddress"
                name="homeAddress"
                value={formData.homeAddress}
                onChange={handleChange}
                disabled={mode === "view"}
                className={`mt-1 block w-full p-2 ${
                  mode === "view" ? "bg-gray-100" : "bg-white"
                } border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              />
            </div>
          </div>
          <h3 className="px-4 text-xl font-semibold mt-4 mb-2 text-gray-800">
            Admission Details
          </h3>
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label
                htmlFor="collegeDepartment"
                className="block text-sm font-medium text-gray-700"
              >
                Department
              </label>
              <select
                id="collegeDepartment"
                name="collegeDepartment"
                value={formData.collegeDepartment}
                onChange={handleChange}
                disabled={mode === "view"}
                className={`mt-1 block w-full p-2 ${
                  mode === "view" ? "bg-gray-100" : "bg-white"
                } border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              >
                <option value="">Select Department</option>
                {collegeDepartments.map((college) => (
                  <option key={college.dept_id} value={college.dept_id}>
                    {college.NAME}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="degreeProgram"
                className="block text-sm font-medium text-gray-700"
              >
                Degree Program
              </label>
              <select
                id="degreeProgram"
                name="degreeProgram"
                value={formData.degreeProgram}
                onChange={handleChange}
                disabled={mode === "view"}
                className={`mt-1 block w-full p-2 ${
                  mode === "view" ? "bg-gray-100" : "bg-white"
                } border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              >
                <option value="">Select Program</option>
                {degreePrograms.map((program) => (
                  <option key={program.program_id} value={program.program_id}>
                    {program.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="studentType"
                className="block text-sm font-medium text-gray-700"
              >
                Student Type
              </label>
              <select
                id="studentType"
                name="studentType"
                value={formData.studentType}
                onChange={handleChange}
                disabled={mode === "view"}
                className={`mt-1 block w-full p-2 ${
                  mode === "view" ? "bg-gray-100" : "bg-white"
                } border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              >
                <option value="">Select Student Type</option>
                <option value="0">Freshman</option>
                <option value="1">Transferee</option>
                <option value="2">Shiftee</option>
                <option value="3">Returnee</option>
                <option value="4">Second Courser</option>
              </select>
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            {mode === "view" && role === 0 ? (
              <button
                type="button"
                id="view"
                onClick={handleEdit}
                className={`px-4 py-2 mx-1 bg-indigo-600 text-white hover:bg-indigo-700 font-semibold rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
              >
                Edit
              </button>
            ) : mode === "edit" && role === 0 ? (
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
            ) : (
              <div className="mb-4 p-2 rounded-md text-blue-800 bg-blue-300">
                Contact an Admin to edit your profile.
              </div>
            )}
          </div>
        </form>
        <div className="basis-1/3 px-10 py-6 bg-yellow-50 border-green-800 border-2 rounded-md">
          <h3 className="text-xl font-semibold mb-6 text-gray-800">
            Application Status
          </h3>
          <p>{!status && status !== 0 ? ("Not yet filled the form") : (appStatuses[status])}</p>
        </div>
      </div>
    </div>
  );
}

export default AppForm;
