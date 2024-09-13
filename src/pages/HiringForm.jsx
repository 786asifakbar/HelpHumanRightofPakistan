import { useState } from 'react';
import { TextField, Checkbox, FormControlLabel, Button } from '@mui/material';

const HiringRequestForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  // Handle file upload
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  // Form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted with the following details:');
    console.log('Selected file:', selectedFile);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-md">
      {/* Form Title */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Hiring Request Form</h1>
        <p className="text-lg">
          If you are looking to hire people, please fill out the form below and let us know your requirements.
        </p>
      </div>

      {/* Job Title & Employment Type */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Job Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <TextField label="Job Title" variant="outlined" fullWidth required />
          <FormControlLabel control={<Checkbox />} label="Remote Position?" />
        </div>
      </div>

      {/* Job Requirements */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Candidate Requirements</h2>
        <ul className="list-disc list-inside text-lg">
          <li>
            <TextField label="Required Skills (e.g., JavaScript, React)" variant="outlined" fullWidth required />
          </li>
          <li>
            <TextField
              label="Years of Experience (e.g., 3+ years)"
              variant="outlined"
              fullWidth
              required
            />
          </li>
          <li>
            <TextField
              label="Required Education Level (e.g., Bachelor's Degree)"
              variant="outlined"
              fullWidth
              required
            />
          </li>
          <li>
            <TextField
              label="Other Qualifications (optional)"
              variant="outlined"
              fullWidth
            />
          </li>
        </ul>
      </div>

      {/* Job Description */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Job Description</h2>
        <TextField
          label="Job Description"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          placeholder="Describe the role, responsibilities, and key deliverables"
          required
        />
      </div>

      {/* Compensation & Benefits */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Compensation and Benefits</h2>
        <ul className="list-disc list-inside text-lg">
          <li>
            <TextField label="Salary Range (e.g., $50,000 - $70,000)" variant="outlined" fullWidth required />
          </li>
          <li>
            <TextField
              label="Benefits (e.g., Health, Dental, Vision)"
              variant="outlined"
              fullWidth
            />
          </li>
        </ul>
      </div>

      {/* Upload Company Info or Job Posting (optional) */}
      <div className="mb-4">
        <h3 className="text-lg font-medium mb-2">Upload Job Posting or Additional Information (optional)</h3>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
        {selectedFile && <p className="mt-2 text-sm text-gray-600">Selected file: {selectedFile.name}</p>}
      </div>

      {/* Contact Information */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <TextField label="Your Name" variant="outlined" fullWidth required />
          <TextField label="Your Email" type="email" variant="outlined" fullWidth required />
          <TextField label="Your Phone Number" variant="outlined" fullWidth />
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-center">
        <Button variant="contained" color="primary" type="submit">Submit Request</Button>
      </div>

      {/* Footer */}
      <div className="text-center text-gray-600 mt-6">
        <p>If you have any questions, feel free to contact us<strong></strong></p>
      </div>
    </div>
  );
};

export default HiringRequestForm;