import { useForm } from 'react-hook-form';
import { TextField, Button, Typography, FormControl, InputLabel, Select, MenuItem, TextareaAutosize } from '@mui/material';

const HiringForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log('Hiring Form Data:', data);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <Typography variant="h5" className="font-bold mb-5">Hiring Form</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <TextField
            label="Company Name"
            variant="outlined"
            fullWidth
            {...register('companyName', { required: 'Company Name is required' })}
            error={!!errors.companyName}
            helperText={errors.companyName?.message}
          />
        </div>
        <div className="mb-4">
          <TextField
            label="Job Title"
            variant="outlined"
            fullWidth
            {...register('jobTitle', { required: 'Job Title is required' })}
            error={!!errors.jobTitle}
            helperText={errors.jobTitle?.message}
          />
        </div>
        <div className="mb-4">
          <FormControl fullWidth>
            <InputLabel>Job Type</InputLabel>
            <Select
              defaultValue=""
              {...register('jobType', { required: 'Job Type is required' })}
            >
              <MenuItem value="Full-time">Full-time</MenuItem>
              <MenuItem value="Part-time">Part-time</MenuItem>
              <MenuItem value="Contract">Contract</MenuItem>
              <MenuItem value="Internship">Internship</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="mb-4">
          <TextareaAutosize
            minRows={5}
            placeholder="Job Description"
            className="w-full p-2 border rounded"
            {...register('jobDescription', { required: 'Job Description is required' })}
          />
          {errors.jobDescription && <span className="text-red-600">{errors.jobDescription.message}</span>}
        </div>
        <div className="mb-4">
          <TextField
            label="Salary Range"
            variant="outlined"
            type="number"
            fullWidth
            {...register('salary', { required: 'Salary is required' })}
            error={!!errors.salary}
            helperText={errors.salary?.message}
          />
        </div>
        <div className="mb-4">
          <TextField
            label="Contact Email"
            variant="outlined"
            type="email"
            fullWidth
            {...register('contactEmail', { required: 'Contact Email is required' })}
            error={!!errors.contactEmail}
            helperText={errors.contactEmail?.message}
          />
        </div>
        <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
      </form>
    </div>
  );
};

export default HiringForm;