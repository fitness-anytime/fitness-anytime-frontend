import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";

export default function NavBar({ isLoggedIn }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{ backgroundColor: "#000000" }} position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <FitnessCenterIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Anywhere Fitness
          </Typography>
          {isLoggedIn === true ? <Button color="inherit">Logout</Button> : ""}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
