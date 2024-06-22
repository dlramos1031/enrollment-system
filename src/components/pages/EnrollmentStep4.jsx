function EnrollmentStep4({ formData, setFormData }) {
  const subjects = [
    { code: "SUBJ101", name: "Subject 1", units: 3, schedule: "MWF 9-10", instructor: "Dr. A" },
    { code: "SUBJ102", name: "Subject 2", units: 4, schedule: "TTh 10-12", instructor: "Prof. B" },
    { code: "SUBJ103", name: "Subject 3", units: 2, schedule: "MW 1-2", instructor: "Dr. C" },
  ];

  const handleSubjectChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({ ...formData, subjects: [...formData.subjects, value] });
    } else {
      setFormData({ ...formData, subjects: formData.subjects.filter((subject) => subject !== value) });
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Subject Selection</h2>
      <div>
        {subjects.map((subject) => (
          <div key={subject.code} className="flex items-center mb-2">
            <input
              type="checkbox"
              value={subject.code}
              checked={formData.subjects.includes(subject.code)}
              onChange={handleSubjectChange}
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
            />
            <label className="ml-2 text-sm text-gray-700">
              {subject.code} - {subject.name} ({subject.units} units)
              <br />
              <span className="text-xs text-gray-500">
                {subject.schedule}, {subject.instructor}
              </span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EnrollmentStep4;
