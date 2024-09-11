import { Typography, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn, Mail, Phone } from '@mui/icons-material';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 px-5">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* About Section */}
        <div className="flex flex-col">
          <Typography variant="h6" className="mb-4 font-bold">
            About Us
          </Typography>
          <Typography variant="body2" className="mb-4">
            We are dedicated to supporting human rights organizations worldwide. By offering logistical, financial, and emotional support, we help these organizations continue their work in advocating for equality and justice.
          </Typography>
        </div>

        {/* Quick Links Section */}
        <div className="flex flex-col">
          <Typography variant="h6" className="mb-4 font-bold">
            Quick Links
          </Typography>
          <ul>
            <li className="mb-2">
              <a href="/" className="text-gray-300 hover:text-white">Home</a>
            </li>
            <li className="mb-2">
              <a href="/about" className="text-gray-300 hover:text-white">About Us</a>
            </li>
            <li className="mb-2">
              <a href="/donate" className="text-gray-300 hover:text-white">Donate</a>
            </li>
            <li className="mb-2">
              <a href="/contact" className="text-gray-300 hover:text-white">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col">
          <Typography variant="h6" className="mb-4 font-bold">
            Contact Us
          </Typography>
          <div className="flex items-center mb-4">
            <Mail className="mr-2" />
            <Typography variant="body2">info@humanrights.org</Typography>
          </div>
          <div className="flex items-center mb-4">
            <Phone className="mr-2" />
            <Typography variant="body2">+123-456-7890</Typography>
          </div>
          <div className="flex space-x-4 mt-4">
            <IconButton aria-label="Facebook" className="text-white">
              <Facebook />
            </IconButton>
            <IconButton aria-label="Twitter" className="text-white">
              <Twitter />
            </IconButton>
            <IconButton aria-label="Instagram" className="text-white">
              <Instagram />
            </IconButton>
            <IconButton aria-label="LinkedIn" className="text-white">
              <LinkedIn />
            </IconButton>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-5 text-center">
        <Typography variant="body2" className="text-gray-400">
          © {new Date().getFullYear()} Human Rights Organization. All rights reserved.
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;