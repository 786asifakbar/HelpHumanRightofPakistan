import { useState } from 'react';
import HiringForm from './HiringForm';
import JobSeekerForm from './JobSeekerForm';

const HelpJobBank = () => {
  const [showForm, setShowForm] = useState(null); // To track which form to show

  const handleButtonClick = (formType) => {
    setShowForm(formType);
  };

  return (
    <div className="flex flex-col items-center justify-center py-10">
      <h1 className="text-4xl font-bold mb-10">Join Us: Hiring or Seeking Jobs</h1>

      {/* Display Buttons if no form is selected */}
      {!showForm && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-2xl transition duration-300"
            onClick={() => handleButtonClick('jobseeker')}
          >
            Job Seeker
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-4 px-8 rounded-lg text-2xl transition duration-300"
            onClick={() => handleButtonClick('hiring')}
          >
            Hiring
          </button>
        </div>
      )}

      {/* Conditionally Render Forms */}
      {showForm === 'jobseeker' && <JobSeekerForm />}
      {showForm === 'hiring' && <HiringForm />}

      {/* Add a "Back" Button to return to the main selection */}
      {showForm && (
        <button
          className="mt-6 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
          onClick={() => setShowForm(null)}
        >
          Back to Selection
        </button>
      )}
    </div>
  );
};

export default HelpJobBank;