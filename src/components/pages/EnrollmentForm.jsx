import { useEffect, useState } from "react";
import EnrollmentStep1 from "./EnrollmentStep1";
import EnrollmentStep2 from "./EnrollmentStep2";
import EnrollmentStep3 from "./EnrollmentStep3";
import EnrollmentStep4 from "./EnrollmentStep4";
import EnrollmentStep5 from "./EnrollmentStep5";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { fetchAdmissionDetails, fetchProgram } from "../../api";

const steps = [
  EnrollmentStep1,  // Program and Major
  EnrollmentStep2,  // Year Level
  EnrollmentStep3,  // Section
  EnrollmentStep4,  // Subjects
  EnrollmentStep5,  // Confirmation
];

function EnrollmentForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    program: "Chosen Program", // default selected program
    major: "Chosen Major", // default selected major
    yearLevel: "1st Year",
    section: "",
    subjects: [],
  });
  const [programs, setProgams] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const details = await fetchAdmissionDetails();
        const prog = await fetchProgram(details.program_id);
        setFormData({...formData});
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        console.log(await fetchProgram());
        setFormData();
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchPrograms();
  }, []);

  const StepComponent = steps[currentStep];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      console.log("Current step: ", currentStep);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-200 shadow-md rounded-md">
      <StepComponent formData={formData} setFormData={setFormData} />
      <div className="flex justify-between mt-4">
        {currentStep > 0 && (
          <button
            onClick={handlePrevious}
            className="px-4 py-2 bg-gray-600 text-white rounded-md shadow-sm hover:bg-gray-700 focus:outline-none"
          >
            <ChevronLeft size={20} className="inline-block mr-2" />
            Previous
          </button>
        )}
        {currentStep < steps.length - 1 ? (
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none"
          >
            Next
            <ChevronRight size={20} className="inline-block ml-2" />
          </button>
        ) : (
          <button
            onClick={() => alert("Enrollment completed!")}
            className="px-4 py-2 bg-green-600 text-white rounded-md shadow-sm hover:bg-green-700 focus:outline-none"
          >
            Confirm
          </button>
        )}
      </div>
      <div className="mt-4 flex justify-center">
        {steps.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 mx-1 rounded-full ${
              index === currentStep ? "bg-blue-600" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default EnrollmentForm;
