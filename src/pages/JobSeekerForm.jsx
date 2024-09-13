import { useState } from 'react';
import { TextField, Checkbox, FormControlLabel, FormGroup, Button } from '@mui/material';

const JobSeekerForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  // Handler for file input
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  // Form submission handler
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here, handle form submission logic (e.g., send data to the server)
    console.log('Form submitted:', selectedFile);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">Job Seeker Application Form</h1>

      <form onSubmit={handleSubmit}>
        {/* Position and Employment Type */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <TextField label="Position Applying For" variant="outlined" fullWidth required />
          <div className="flex flex-col">
            <label className="mb-2">Employment Type</label>
            <FormGroup row>
              <FormControlLabel control={<Checkbox />} label="Full-Time" />
              <FormControlLabel control={<Checkbox />} label="Part-Time" />
              <FormControlLabel control={<Checkbox />} label="Contract" />
            </FormGroup>
          </div>
        </div>

        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <TextField label="Full Name" variant="outlined" fullWidth required />
          <TextField label="Nationality" variant="outlined" fullWidth required />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <TextField label="Address" variant="outlined" fullWidth required />
          <TextField label="Date of Birth" type="date" InputLabelProps={{ shrink: true }} variant="outlined" fullWidth required />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <TextField label="Phone" variant="outlined" fullWidth required />
          <TextField label="Email" type="email" variant="outlined" fullWidth required />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <FormControlLabel control={<Checkbox />} label="Driving License" />
          <TextField label="Years of Work Experience" variant="outlined" fullWidth />
        </div>

        {/* Upload CV */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Upload Your CV</h2>
          <input 
            type="file" 
            accept=".pdf,.doc,.docx" 
            onChange={handleFileChange} 
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            required
          />
          {selectedFile && <p className="mt-2 text-sm text-gray-600">Selected file: {selectedFile.name}</p>}
        </div>

        {/* Educational Background */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Educational Background</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
            <TextField label="Degree/Course" variant="outlined" fullWidth />
            <TextField label="University/Institute" variant="outlined" fullWidth />
            <TextField label="Year of Graduation" variant="outlined" fullWidth />
            <TextField label="Grade" variant="outlined" fullWidth />
            <TextField label="City" variant="outlined" fullWidth />
          </div>
        </div>

        {/* Employment History */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Employment History</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <TextField label="Company" variant="outlined" fullWidth />
            <TextField label="Position" variant="outlined" fullWidth />
            <TextField label="Year" variant="outlined" fullWidth />
            <TextField label="Reason for Leaving" variant="outlined" fullWidth />
          </div>
        </div>

        {/* Skills & Training */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Skills & Training</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <TextField label="Skill/Training Achievement" variant="outlined" fullWidth />
            <TextField label="Level" variant="outlined" fullWidth />
            <TextField label="Year" variant="outlined" fullWidth />
            <TextField label="Institute" variant="outlined" fullWidth />
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <Button variant="contained" color="primary" type="submit">Submit Application</Button>
        </div>
      </form>
    </div>
  );
};

export default JobSeekerForm;