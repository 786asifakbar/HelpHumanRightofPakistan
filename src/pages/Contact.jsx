import { TextField, Button } from '@mui/material';
// import { Loader } from "@googlemaps/js-api-loader"

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row p-8">
      {/* Left Side */}
      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
        <p className="mb-4">Contact us at:</p>
        <p className="mb-2">Phone: (123) 456-7890</p> {/* Contact Number */}
        <p className="mb-2">Email: contact@example.com</p> {/* Email Address */}
        <p className="mb-4">Address: 123 Main Street, City, Country</p> {/* Address */}
        
        {/* Google Map API Integration */}
        <div className="h-64 w-full">
          <iframe
            className="w-full h-full"
            title="Google Map"
            src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=123+Main+Street,City,Country`}
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 p-4">
        <form>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Message"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            className="mt-4"
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;