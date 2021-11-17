import React, { useState } from "react";

import {
  Container,
  Typography,
  Box,
  Link,
  TextField,
  CssBaseline,
  Button,
} from "@mui/material";

import styled from "styled-components";

const StyledFormContainer = styled.main`
  margin-top: 2rem;

  input {
    color: white;
  }

  label {
    color: white !important;
  }

  .Mui-focused fieldset {
    border-color: white !important;
  }

  .MuiTypography-body2 {
    text-decoration: underline;
  }

  .MuiButton-root:hover {
    background-color: green;
  }
`;

const initialFormState = {
  email: "",
  password: "",
};

function Login() {
  localStorage.setItem("token", "asdf");

  const [formState, setFormState] = useState(initialFormState);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
  };

  return (
    <StyledFormContainer>
      <Container
        component="main"
        maxWidth="xs"
        // style={{ backgroundColor: "#a81616" }}
      >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>

            <Link href="/signup" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Box>
        </Box>
        <Typography
          sx={{ mt: 2 }}
          variant="body2"
          color="text.secondary"
          align="center"
        >
          {"Copyright © "}
          <Link color="inherit" href="/">
            Anywhere Fitness
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Container>
    </StyledFormContainer>
  );
}

export default Login;
