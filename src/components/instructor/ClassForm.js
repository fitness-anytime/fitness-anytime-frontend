import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { format } from "date-fns";

import schema from "../../validation/formSchema.js";
import * as yup from "yup";

import {
  Container,
  Box,
  Typography,
  TextField,
  MenuItem,
  Slider,
  Button,
} from "@mui/material";

import { LocalizationProvider, DatePicker, TimePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import axios from "axios";

// Setting pre-set options for our dropdown menus here
const classTypes = [
  {
    type: "Yoga",
  },
  {
    type: "Insanity",
  },
  {
    type: "RIPPED",
  },
  {
    type: "Pilates",
  },
  {
    type: "Aerobic",
  },
  {
    type: "Karate",
  },
];
const durations = [
  "0:15",
  "0:30",
  "0:45",
  "1:00",
  "1:15",
  "1:30",
  "1:45",
  "2:00",
];

const intensitySliderMarks = [
  {
    value: 1,
    label: "1",
  },
  {
    value: 2,
    label: "2",
  },
  {
    value: 3,
    label: "3",
  },
  {
    value: 4,
    label: "4",
  },
  {
    value: 5,
    label: "5",
  },
];

const initialFormState = {
  className: "",
  startTime: "",
  classDate: "",
  classType: "",
  duration: "",
  intensity: 1,
  location: "",
  maxCapacity: "",
};

const initialFormErrors = {
  className: "",
  startTime: "",
  classDate: "",
  classType: "",
  duration: "",
  intensity: "",
  location: "",
  maxCapacity: "",
};

const initialDisabled = true;

const StyledFormContainer = styled.main`
  margin-top: 2rem;

  .MuiContainer-root {
    background-color: white;
    border-radius: 0.5rem;
  }

  .MuiBox-root {
    padding: 2.5rem;
  }

  .MuiTextField-root,
  .MuiSlider-root {
    margin: 1rem 1rem;
  }

  span.MuiTypography-p {
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 400;

    line-height: 1.66;
    letter-spacing: 0.03333em;
  }
`;

export default function ClassForm({ reschedule, update }) {
  const [formState, setFormState] = useState(initialFormState);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const navigate = useNavigate();

  const handleChange = (event, name) => {
    if (name === "startTime" || name === "classDate") {
      setFormState({ ...formState, [name]: event });
    } else {
      validate(event.target.name, event.target.value);
      setFormState({ ...formState, [event.target.name]: event.target.value });
    }
  };

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((error) =>
        setFormErrors({ ...formErrors, [name]: error.errors[0] })
      );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formattedClass = { ...formState };
    formattedClass.startTime = format(formattedClass.startTime, "h:m aaa");
    formattedClass.classDate = format(formattedClass.classDate, "PPP");

    if (!update && !reschedule) {
      /**
        axiosWithAuth().post(`url`, formattedClass).then(res => {
          setClasses(res.data)
          navigate("/instructor")
        })
        */
    }

    if (update || reschedule) {
      /**
         axiosWithAuth().patch(`url` formattedClass).then(res => {
           setClasses(res.data)
           navigate("/instructor")
     }).catch(err => {})
     */
    }
  };

  useEffect(() => {
    schema.isValid(formState).then((valid) => setDisabled(!valid));
  }, [formState]);

  useEffect(() => {
    if (update || reschedule) {
      /*
    axios.get(`url/${id}`).then(res => {
      setFormState(res.data)
    })
    */
    }
  }, []);

  return (
    <StyledFormContainer>
      <Container component="div" maxWidth="md">
        {/* MUI's form div */}
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <Typography gutterBottom variant="h4" component="div" align="center">
            {reschedule && "Reschedule your Class"}
            {update && "Update your Class"}
            {!reschedule && !update && "Create a Class"}
          </Typography>

          {/* Class Name Input */}
          <TextField
            id="class-name-input"
            label="Class Name"
            variant="outlined"
            name="className"
            disabled={reschedule}
            value={formState.className}
            onChange={handleChange}
            error={!!formErrors.className}
            helperText={formErrors.className}
          />

          {/* Class Type Input */}
          <TextField
            id="class-type-input"
            select
            label="Class Type"
            name="classType"
            disabled={reschedule}
            value={formState.classType}
            onChange={handleChange}
            error={!!formErrors.classType}
            helperText={
              formErrors.classType
                ? formErrors.classType
                : "Please select your class type"
            }
          >
            {/* Mapping through our pre-set dropdown menu objects/arrays */}
            {classTypes.map((option) => (
              <MenuItem key={option.type} value={option.type}>
                {option.type}
              </MenuItem>
            ))}
          </TextField>

          {/* Start Time Input */}
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <TimePicker
              label="Start Time"
              id="start-time-input"
              value={formState.startTime}
              onChange={(event) => {
                handleChange(event, "startTime");
              }}
              variant="outlined"
              error={!!formErrors.startTime}
              helperText={formErrors.startTime ? formErrors.startTime : null}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <br></br>
          {/* Date Input */}

          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Pick a Date"
              value={formState.classDate}
              className="MuiDatePicker"
              minDate={new Date()}
              onChange={(event) => {
                handleChange(event, "classDate");
              }}
              error={!!formErrors.classDate}
              helperText={
                formErrors.classDate
                  ? formErrors.classDate
                  : "Must be scheduled 5 days in advance."
              }
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>

          {/* Duration Input */}
          <TextField
            id="duration-input"
            select
            className="MuiTimePicker"
            label="Class Duration"
            name="duration"
            disabled={reschedule}
            value={formState.duration}
            onChange={handleChange}
            helperText="Please select your workout duration"
          >
            {durations.map((option, i) => (
              <MenuItem key={i} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>

          {/* Intensity Input */}
          <Typography
            variant="p"
            htmlFor="intensity-input"
            display="block"
            align="center"
          >
            Workout Intensity
          </Typography>
          <Slider
            aria-label="Custom marks"
            defaultValue={1}
            step={1}
            disabled={reschedule}
            valueLabelDisplay="auto"
            marks={intensitySliderMarks}
            id="intensity-input"
            label="Workout Intensity"
            name="intensity"
            onChange={handleChange}
            min={1}
            max={5}
          />

          {/* Location Input */}
          <TextField
            id="location-input"
            label="Location"
            variant="outlined"
            name="location"
            value={formState.location}
            onChange={handleChange}
            error={!!formErrors.location}
            helperText={formErrors.location}
          />

          {/* Max Capacity Input */}
          <TextField
            id="max-capacity-input"
            label="Max Capacity"
            variant="outlined"
            type="number"
            name="maxCapacity"
            disabled={reschedule}
            value={formState.maxCapacity}
            onChange={handleChange}
            error={!!formErrors.maxCapacity}
            helperText={formErrors.maxCapacity}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            color="success"
            disabled={disabled}
          >
            {reschedule && "Reschedule"}
            {update && "Update"}
            {!reschedule && !update && "Create"}
          </Button>
          <Button
            fullWidth
            variant="contained"
            color="error"
            onClick={() => {
              navigate("/instructor");
            }}
          >
            Cancel
          </Button>
        </Box>
      </Container>
    </StyledFormContainer>
  );
}
