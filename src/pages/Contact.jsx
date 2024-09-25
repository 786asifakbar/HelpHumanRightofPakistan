import { useState } from 'react';
import { TextField, Button, Snackbar } from '@mui/material';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:5000/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setOpenSnackbar(true);
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }
  };

  return (
    <> 
    
    <div className="flex flex-col md:flex-row p-8">
      {/* Left Side */}
      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
        <p className="mb-4">Contact us at:</p>
        <p className="mb-2">Phone: (123) 456-7890</p>
        <p className="mb-2">Email: 786asifakbar53@gmail.com</p>
        <p className="mb-4">Address: FC Building, Main University Rd, near Askari Park, Eissa Nagri, Karachi, Karachi City, Sindh 75270, Pakistan</p>

        {/* Google Map Integration */}
        <div className="h-64 w-full">
          <iframe
            className="w-full h-full"
            title="Google Map"
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.056762622121!2d67.06078377463437!3d24.89604537790609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f74156c5323%3A0x257f1b15998551b7!2sHelp%20Human%20Rights%20Organization%20Of%20Pakistan!5e0!3m2!1sen!2s!4v1727262797381!5m2!1sen!2s`}
            allowFullScreen
          ></iframe>
        </div>
      </div>
    
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 shadow-md rounded-md max-w-md w-full"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
        <TextField
          label="Name"
          variant="outlined"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          variant="outlined"
          name="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Message"
          variant="outlined"
          name="message"
          value={formData.message}
          onChange={handleChange}
          fullWidth
          margin="normal"
          multiline
          rows={4}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          className="mt-4"
        >
          Send Message
        </Button>

        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={() => setOpenSnackbar(false)}
          message="Message sent!"
        />
      </form>
      </div>
    </div>
    </>
  );
};
export default Contact;