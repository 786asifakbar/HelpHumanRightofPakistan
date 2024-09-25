import { useState } from 'react';
import {
  Container, TextField, Button, Typography, FormControl,
  InputLabel, Select, MenuItem, FormHelperText, Dialog,
  DialogActions, DialogContent, DialogContentText, DialogTitle
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DonationForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState(null);

  // Open confirmation dialog
  const openConfirmationDialog = (data) => {
    // Ensure the selected payment method is passed to formData
    setFormData({ ...data, paymentMethod: selectedPaymentMethod });
    setIsModalOpen(true);
  };

  // Close confirmation dialog
  const closeConfirmationDialog = () => {
    setIsModalOpen(false);
  };

  // Process donation logic
  const confirmDonation = () => {
    // Simulate processing the donation
    console.log('Donation processed:', formData);

    // Notify the user
    toast.success(`Thank you, ${formData.name}! Your donation of $${formData.amount} via ${formData.paymentMethod} has been processed.`);

    // Close modal
    setIsModalOpen(false);
  };

  return (
    <Container maxWidth="md" className="py-10">
      <Typography variant="h4" className="text-center font-bold mb-8">
        Donate to Support Human Rights
      </Typography>

      <form onSubmit={handleSubmit(openConfirmationDialog)} className="bg-white p-8 rounded-lg shadow-md">
        <div className="mb-4">
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            {...register('name', { required: 'Name is required' })}
            error={!!errors.name}
            helperText={errors.name?.message}
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
            label="Donation Amount"
            variant="outlined"
            type="number"
            fullWidth
            {...register('amount', { required: 'Amount is required' })}
            error={!!errors.amount}
            helperText={errors.amount?.message}
          />
        </div>
        <div className="mb-4">
          <FormControl fullWidth>
            <InputLabel>Payment Method</InputLabel>
            <Select
              value={selectedPaymentMethod}
              onChange={(e) => setSelectedPaymentMethod(e.target.value)}
              {...register('paymentMethod', { required: 'Payment method is required' })}
              error={!!errors.paymentMethod}
            >
              <MenuItem value="Bank Transfer">Bank Transfer</MenuItem>
              <MenuItem value="JazzCash">JazzCash</MenuItem>
              {/* Add more payment options as needed */}
            </Select>
            <FormHelperText>Select your preferred payment method</FormHelperText>
          </FormControl>
        </div>
        <div className="mb-4">
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
          >
            Donate
          </Button>
        </div>
      </form>

      {/* Confirmation Dialog */}
      <Dialog open={isModalOpen} onClose={closeConfirmationDialog}>
        <DialogTitle>Confirm Your Donation</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You are about to donate ${formData?.amount} using {formData?.paymentMethod}.
            <br />
            Name: {formData?.name}
            <br />
            Email: {formData?.email}
            <br />
            Payment Method: {formData?.paymentMethod}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeConfirmationDialog} color="secondary">
            Cancel
          </Button>
          <Button onClick={confirmDonation} color="primary">
            Confirm & Donate
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default DonationForm;