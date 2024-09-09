import { useState } from "react";
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [impactEl, setImpactEl] = useState(null);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleImpactClick = (event) => {
    setImpactEl(event.currentTarget);
  };

  const handleImpactClose = () => {
    setImpactEl(null);
  };

  return (
    <AppBar position="static" className="bg-blue-500">
      <Toolbar className="flex justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src="../../public/logo.png" alt="Logo" className="h-8 w-8 mr-2" />
          <div className="text-2xl font-bold text-white">MyApp</div>
        </div>

        {isMobile ? (
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuClick}
            >
              <MenuIcon />
            </IconButton>

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              className="mt-12"
            >
              <MenuItem onClick={handleMenuClose}>
                <Link to="/" className="text-blue-500">Home</Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link to="/about" className="text-blue-500">About</Link>
              </MenuItem>
              
              {/* Our Impact dropdown in mobile */}
              <MenuItem onClick={handleMenuClose}>
                <Link to="/our-impact" className="text-blue-500">Our Impact</Link>
              </MenuItem>

              <MenuItem onClick={handleMenuClose}>
                <Link to="/our-members" className="text-blue-500">Our Members</Link>
              </MenuItem>

              <MenuItem onClick={handleMenuClose}>
                <Link to="/contact" className="text-blue-500">Contact</Link>
              </MenuItem>

              <MenuItem onClick={handleMenuClose}>
                <Link to="/donate" className="text-blue-500">Donate Now</Link>
              </MenuItem>
            </Menu>
          </>
        ) : (
          <div className="flex items-center space-x-4">
            <Button color="inherit">
              <Link to="/" className="text-white">Home</Link>
            </Button>
            <Button color="inherit">
              <Link to="/about" className="text-white">About</Link>
            </Button>
            
            {/* Dropdown for Our Impact */}
            <div>
              <Button
                color="inherit"
                aria-controls="impact-menu"
                aria-haspopup="true"
                onClick={handleImpactClick}
                endIcon={<ArrowDropDownIcon />}
                className="text-white"
              >
                Our Impact
              </Button>
              <Menu
                id="impact-menu"
                anchorEl={impactEl}
                open={Boolean(impactEl)}
                onClose={handleImpactClose}
              >
                <MenuItem onClick={handleImpactClose}>
                  <Link to="/impact/environment" className="text-blue-500">Environment</Link>
                </MenuItem>
                <MenuItem onClick={handleImpactClose}>
                  <Link to="/impact/community" className="text-blue-500">Community</Link>
                </MenuItem>
                <MenuItem onClick={handleImpactClose}>
                  <Link to="/impact/education" className="text-blue-500">Education</Link>
                </MenuItem>
              </Menu>
            </div>

            <Button color="inherit">
              <Link to="/our-members" className="text-white">Our Members</Link>
            </Button>
            <Button color="inherit">
              <Link to="/contact" className="text-white">Contact</Link>
            </Button>

            {/* Donate Now button */}
            <Button
              variant="contained"
              color="secondary"
              className="bg-red-500 text-white"
            >
              <Link to="/donate" className="text-white">Donate Now</Link>
            </Button>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;