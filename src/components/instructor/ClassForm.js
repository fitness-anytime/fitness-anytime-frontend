import React, { useState, useEffect } from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import TimePicker from "@mui/lab/TimePicker";
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
const intensities = [1, 2, 3, 4, 5];

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

const inputStyles = {
  margin: "0.8rem 1rem",
};

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

export default function ClassForm() {
  const [formState, setFormState] = useState(initialFormState);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const handleChange = (event, dateOrTimeInput, name) => {
    if (dateOrTimeInput === "true") {
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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
    // insert POST function here
  };

  Date.prototype.addDays = function (days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  };

  const date = new Date();

  useEffect(() => {
    schema.isValid(formState).then((valid) => setDisabled(!valid));
  }, [formState]);

  return (
    <Container
      component="main"
      maxWidth="md"
      style={{ backgroundColor: "white" }}
    >
      {/* MUI's form div */}
      <Box
        component="form"
        sx={{
          m: 2,
          p: 3,
        }}
        noValidate
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <Typography gutterBottom variant="h3" component="div" align="center">
          Create a Class
        </Typography>

        {/* Class Name Input */}
        <TextField
          id="class-name-input"
          label="Class Name"
          variant="outlined"
          name="className"
          value={formState.className}
          onChange={handleChange}
          style={inputStyles}
          error={!!formErrors.className}
          helperText={formErrors.className}
        />

        {/* Class Type Input */}
        <TextField
          id="class-type-input"
          select
          style={inputStyles}
          label="Class Type"
          name="classType"
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
              handleChange(event, "true", "startTime");
            }}
            style={inputStyles}
            sx={{ m: 2 }}
            margin="normal"
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
            style={inputStyles}
            value={formState.classDate}
            minDate={date.addDays(5)}
            onChange={(event) => {
              handleChange(event, "true", "classDate");
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
          style={inputStyles}
          label="Class Duration"
          name="duration"
          value={formState.duration}
          onChange={handleChange}
          helperText="Please select your workout duration"
        >
          {durations.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>

        {/* Intensity Input */}
        <Typography gutterBottom variant="p" component="div" align="center">
          Workout Intensity
        </Typography>
        <Slider
          style={inputStyles}
          aria-label="Custom marks"
          defaultValue={1}
          step={1}
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
          style={inputStyles}
          name="location"
          value={formState.location}
          onChange={handleChange}
          error={!!formErrors.location}
          helperText={formErrors.location ? formErrors.location : null}
        />

        {/* Max Capacity Input */}
        <TextField
          id="max-capacity-input"
          label="Max Capacity"
          variant="outlined"
          type="number"
          name="maxCapacity"
          style={inputStyles}
          value={formState.maxCapacity}
          onChange={handleChange}
          error={!!formErrors.maxCapacity}
          helperText={formErrors.maxCapacity ? formErrors.maxCapacity : null}
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          disabled={disabled}
        >
          Create Class
        </Button>
      </Box>
    </Container>
  );
}
