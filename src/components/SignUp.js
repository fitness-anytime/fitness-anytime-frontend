import React, { useState, useEffect } from "react";
import schema from "../validation/signUpSchema";
import * as yup from "yup";

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
  label {
    color: black !important;
  }

  .Mui-focused fieldset {
    border-color: black !important;
  }

  .MuiBox-root {
    background-color: white;
    padding: 1rem;
    border-radius: 0.5rem;
  }

  .MuiCheckbox-colorPrimary {
    color: black;
  }

  .MuiButton-root:hover {
    background-color: green;
  }
`;

const initialFormState = {
  email: "",
  password: "",
};

const initialFormErrors = {
  email: "",
  password: "",
};

const initialDisabled = true;

function SignUp() {
  const [formState, setFormState] = useState(initialFormState);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((error) =>
        setFormErrors({ ...formErrors, [name]: error.errors[0] })
      );
  };

  const handleChange = (e) => {
    validate(e.target.name, e.target.value);
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
  };

  useEffect(() => {
    schema.isValid(formState).then((valid) => setDisabled(!valid));
  }, [formState]);

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
              error={!!formErrors.email}
              helperText={formErrors.email}
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
              error={!!formErrors.password}
              helperText={formErrors.password}
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
              disabled={disabled}
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
