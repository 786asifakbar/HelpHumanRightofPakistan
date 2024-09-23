import { useState } from 'react';
import {
  Container, TextField, Button, Typography, FormControl,
  InputLabel, Select, MenuItem, FormHelperText, Dialog,
  DialogActions, DialogContent, DialogContentText, DialogTitle
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';  // for notifications (install with `npm install react-toastify`)
// Add react-toastify CSS
import 'react-toastify/dist/ReactToastify.css';

const DonationForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [selectedAmount, setSelectedAmount] = useState('');
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState(null);

  // Open confirmation dialog
  const openConfirmationDialog = (data) => {
    setFormData(data);  // Store form data for final submission
    setIsModalOpen(true);
  };

  // Close confirmation dialog
  const closeConfirmationDialog = () => {
    setIsModalOpen(false);
  };

  // Final submission to process the donation
  const confirmDonation = () => {
    // Process donation (e.g., send to API)
    console.log('Donation processed:', formData);

    // Notify the user
    toast.success(`Thank you, ${formData.name}! Your donation of ${formData.amount} ${formData.currency} has been processed.`);
    
    // Close modal
    setIsModalOpen(false);

    // Reset form (you may reset the form fields here)
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
            value={selectedAmount}
            onChange={(e) => setSelectedAmount(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <FormControl fullWidth>
            <InputLabel>Currency</InputLabel>
            <Select
              value={selectedCurrency}
              onChange={(e) => setSelectedCurrency(e.target.value)}
              {...register('currency', { required: 'Currency is required' })}
            >
            <MenuItem value="PKR">PKR</MenuItem>
              <MenuItem value="USD">USD</MenuItem>
              <MenuItem value="EUR">EUR</MenuItem>
              <MenuItem value="GBP">GBP</MenuItem>
            </Select>
            <FormHelperText>Select your preferred currency</FormHelperText>
          </FormControl>
        </div>
        <div className="mb-4">
          <FormControl fullWidth>
            <InputLabel>Payment Method</InputLabel>
            <Select
              value={selectedPaymentMethod}
              onChange={(e) => setSelectedPaymentMethod(e.target.value)}
              {...register('paymentMethod', { required: 'Payment Method is required' })}
            >
              <MenuItem value="Credit Card">Credit Card</MenuItem>
              <MenuItem value="PayPal">PayPal</MenuItem>
              <MenuItem value="Bank Transfer">Bank Transfer</MenuItem>
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
            Please confirm your donation of {formData?.amount} {formData?.currency} using {selectedPaymentMethod}.
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