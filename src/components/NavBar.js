import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import { useNavigate } from "react-router-dom";

import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";

export default function NavBar({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    // make api update here

    // remove local token
    localStorage.removeItem("token");
    // set isLoggedIn To false
    setIsLoggedIn(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{ backgroundColor: "#000000" }} position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1.5 }}
            onClick={() => {
              navigate("/");
            }}
          >
            <FitnessCenterIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, cursor: "pointer" }}
            onClick={() => {
              navigate("/");
            }}
          >
            Anywhere Fitness
          </Typography>
          {isLoggedIn ? (
            <Button 
              className="navButton"
              onClick={handleLogout} 
              color="inherit"
            >
              Logout
            </Button>
          ) : (
            <Button
            className="navButton"
              onClick={() => {
                navigate("/login");
              }}
              color="inherit"
            >
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
