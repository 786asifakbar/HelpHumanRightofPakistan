import { useForm } from 'react-hook-form';
import { TextField, Button, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const JobSeekerForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log('Job Seeker Form Data:', data);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <Typography variant="h5" className="font-bold mb-5">Job Seeker Form</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <TextField
            label="Full Name"
            variant="outlined"
            fullWidth
            {...register('fullName', { required: 'Full Name is required' })}
            error={!!errors.fullName}
            helperText={errors.fullName?.message}
          />
        </div>
        <div className="mb-4">
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            fullWidth
            {...register('email', { required: 'Email is required' })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
        </div>
        <div className="mb-4">
          <TextField
            label="Phone Number"
            variant="outlined"
            type="tel"
            fullWidth
            {...register('phoneNumber', { required: 'Phone Number is required' })}
            error={!!errors.phoneNumber}
            helperText={errors.phoneNumber?.message}
          />
        </div>
        <div className="mb-4">
          <FormControl fullWidth>
            <InputLabel>Experience Level</InputLabel>
            <Select
              defaultValue=""
              {...register('experienceLevel', { required: 'Experience Level is required' })}
            >
              <MenuItem value="Junior">Junior</MenuItem>
              <MenuItem value="Mid-level">Mid-level</MenuItem>
              <MenuItem value="Senior">Senior</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="mb-4">
          <TextField
            label="Skills"
            variant="outlined"
            fullWidth
            {...register('skills', { required: 'Skills are required' })}
            error={!!errors.skills}
            helperText={errors.skills?.message}
          />
        </div>
        <div className="mb-4">
          <TextField
            label="Upload Resume"
            type="file"
            fullWidth
            InputLabelProps={{ shrink: true }}
            {...register('resume', { required: 'Resume is required' })}
            error={!!errors.resume}
            helperText={errors.resume?.message}
          />
        </div>
        <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
      </form>
    </div>
  );
};

export default JobSeekerForm;