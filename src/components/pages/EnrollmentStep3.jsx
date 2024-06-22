function EnrollmentStep3({ formData, setFormData }) {
  const sections = [
    { id: "A", count: 3 },
    { id: "B", count: 5 },
    { id: "C", count: 2 },
  ];

  const handleSectionChange = (e) => {
    setFormData({ ...formData, section: e.target.value });
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Section Selection</h2>
      <div>
        <label className="block text-sm font-medium text-gray-700">Section</label>
        <select
          value={formData.section}
          onChange={handleSectionChange}
          className="mt-1 block w-full p-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="">Select Section</option>
          {sections.map((section) => (
            <option key={section.id} value={section.id}>
              {section.id} - {section.count}/5 students
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default EnrollmentStep3;
