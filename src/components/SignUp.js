import React, { useState } from "react";

import {
  Container,
  Typography,
  Box,
  Link,
  TextField,
  CssBaseline,
  Button,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

import styled from "styled-components";

const StyledFormContainer = styled.main`
  margin-top: 2rem;

  .MuiTypography-body2 {
    text-decoration: underline;
  }

  input {
    color: white;
  }

  label {
    color: white !important;
  }

  .Mui-focused fieldset {
    border-color: white !important;
  }

  .MuiCheckbox-colorPrimary {
    color: white;
  }

  .MuiTypography-body1 {
    color: white;
  }

  .MuiButton-root:hover {
    background-color: green;
  }
`;

const initialFormState = {
  email: "",
  password: "",
};

function SignUp() {
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
      <Container component="main" maxWidth="xs">
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
            Sign Up
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
              value={formState.email}
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
              value={formState.password}
              autoComplete="current-password"
              onChange={handleChange}
            />

            <FormControlLabel
              control={<Checkbox value="true" color="primary" />}
              label="Sign Up as an Instructor"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
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

export default SignUp;
