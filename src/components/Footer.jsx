import { Typography, IconButton } from '@mui/material';
import { Facebook, YouTube, Instagram, LinkedIn, Mail, Phone } from '@mui/icons-material';

const Footer = () => {
  return (
    <footer className="bg-red-600 text-white py-10 px-5">
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
              <a href="/DonationForm" className="text-gray-300 hover:text-white">Donate</a>
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
            <a href="mailto:helphumanrightofficial@gmail.com" className="text-gray-300 hover:text-white">
              <Typography variant="body2">helphumanrightofficial@gmail.com</Typography>
            </a>
          </div>
          <div className="flex items-center mb-4">
            <Phone className="mr-2" />
            <a href="tel:+923335081913" className="text-gray-300 hover:text-white">
              <Typography variant="body2">+92 333 508 1913</Typography>
            </a>
          </div>
          <div className="flex space-x-4 mt-4">
            <a href="https://www.facebook.com/profile.php?id=61558394109139" target="_blank" rel="noopener noreferrer">
              <IconButton aria-label="Facebook" className="text-white">
                <Facebook />
              </IconButton>
            </a>
            <a href="https://www.youtube.com/@helphumanrights" target="_blank" rel="noopener noreferrer">
              <IconButton aria-label="Youtube" className="text-white">
                <YouTube />
              </IconButton>
            </a>
            <a href="https://www.instagram.com/officialhrop/" target="_blank" rel="noopener noreferrer">
              <IconButton aria-label="Instagram" className="text-white">
                <Instagram />
              </IconButton>
            </a>
            <a href="https://www.linkedin.com/in/helphuman-right-8821b2288/" target="_blank" rel="noopener noreferrer">
              <IconButton aria-label="LinkedIn" className="text-white">
                <LinkedIn />
              </IconButton>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white mt-10 pt-5 text-center">
        <Typography variant="body2" className="text-gray-400">
          © {new Date().getFullYear()} Help Human Right Organization Of Pakistan. All rights reserved.
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;