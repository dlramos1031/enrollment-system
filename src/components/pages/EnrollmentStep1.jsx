

function EnrollmentStep1({ formData }) {

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Program and Major</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Program</label>
        <input
          type="text"
          value={formData.program}
          disabled
          className="mt-1 block w-full p-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Major</label>
        <input
          type="text"
          value={formData.major}
          disabled
          className="mt-1 block w-full p-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
    </div>
  );
}

export default EnrollmentStep1;
