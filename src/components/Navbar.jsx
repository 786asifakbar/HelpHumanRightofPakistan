import  { useState } from "react";
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mui/material";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" className="bg-blue-500">
      <Toolbar className="flex justify-between">
        <div className="text-2xl font-bold text-white">MyApp</div>

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

              <MenuItem onClick={handleMenuClose}>
                <Link to="/OurMember" className="text-blue-500">Our Member</Link>
              </MenuItem>

              <MenuItem onClick={handleMenuClose}>
                <Link to="/Contact" className="text-blue-500">Contact </Link>
              </MenuItem>

              {/* <MenuItem onClick={handleMenuClose}>
                <Link to="/services" className="text-blue-500">Services</Link>
              </MenuItem> */}
            
            </Menu>
          </>
        ) : (
          <div className="flex space-x-4">
            <Button color="inherit">
              <Link to="/" className="text-white">Home</Link>
            </Button>
            <Button color="inherit">
              <Link to="/about" className="text-white">About</Link>
            </Button>
            <Button color="inherit">
              <Link to="/services" className="text-white">Services</Link>
            </Button>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;