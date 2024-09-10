import { useState } from "react";
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mui/material";

// Tailwind CSS Styles
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
    <AppBar position="sticky" className="bg-red-600">
      <Toolbar className="flex items-center justify-between px-4 py-2">
        {/* Logo */}
        <div className="flex items-center">
          <img src="../../public/logo.png" alt="Logo" className="h-16 w-16 mr-2" />
          <div className="text-white text-xl font-bold"></div>
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
              className="bg-white"
            >
              <MenuItem onClick={handleMenuClose}>
                <Link to="/" className="text-blue-600">Home</Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link to="/about" className="text-blue-600">About</Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
              
              
                <Link to="/our-impact" className="text-blue-600">Our Impact</Link>
              
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link to="/our-members" className="text-blue-600">Our Members</Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link to="/contact" className="text-blue-600">Contact</Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link to="/donate" className="text-blue-600 bg-red-600 ">Donate Now</Link>
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
                  <Link to="/shadiMubark" className="text-blue-600">Marraige Cermoney</Link>
                </MenuItem>
                <MenuItem onClick={handleImpactClose}>
                  <Link to="/FoodAid" className="text-blue-600">FoodAid</Link>
                </MenuItem>
                <MenuItem onClick={handleImpactClose}>
                  <Link to="HelpEducation" className="text-blue-600">Education</Link>
                </MenuItem>
                
                <MenuItem onClick={handleImpactClose}>
                  <Link to="Health" className="text-blue-600">Health</Link>
                </MenuItem>
                <MenuItem onClick={handleImpactClose}>
                  <Link to="WaterPlant" className="text-blue-600">WaterPlant</Link>
                </MenuItem>
                
              </Menu>
            
            </div>
            
            
            <Button color="inherit">
              <Link to="/our-members" className="text-white">Our Members</Link>
            </Button>
            <Button color="inherit">
              <Link to="/contact" className="text-white">Contact</Link>
            </Button>
            <Button
              variant="contained"
              className="bg-red-600 text-white"
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