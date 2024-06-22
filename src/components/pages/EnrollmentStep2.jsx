function EnrollmentStep2({ formData }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Year Level</h2>
      <div>
        <label className="block text-sm font-medium text-gray-700">Year Level</label>
        <input
          type="text"
          value={formData.yearLevel}
          disabled
          className="mt-1 block w-full p-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
    </div>
  );
}

export default EnrollmentStep2;
