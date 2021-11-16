import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

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
  "0:00",
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

export default function ClassForm() {
  // Just setting states for all our inputs
  const [className, setClassName] = useState("");
  const [startTime, setStartTime] = useState("");
  const [classType, setClassType] = useState("");
  const [duration, setDuration] = useState("");
  const [intensity, setIntensity] = useState("");
  const [location, setLocation] = useState("");
  const [maxCapacity, setMaxCapacity] = useState("");

  // Should be able to consolidate these into one change handler function; not sure how at the moment
  const handleClassTypeChange = (event) => {
    setClassType(event.target.value);
  };

  const handleDurationChange = (event) => {
    setDuration(event.target.value);
  };

  const handleIntensityChange = (event) => {
    setIntensity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //might need to work on naming conventions here
    const newClass = {
      name: className,
      type: classType,
      startTime: startTime,
      duration: duration,
      level: intensity,
      location: location,
      registered: 0,
      maxSize: maxCapacity,
      // id: 0 not sure how we're setting ids here
    };
    // insert POST function here
  };

  return (
    <div className="create-a-class-form">
      {/* MUI's form div */}
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
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
          onInput={(evt) => setClassName(evt.target.value)}
        />

        {/* Class Type Input */}
        <TextField
          id="class-type-input"
          select
          label="Class Type"
          value={classType}
          onChange={handleClassTypeChange}
          helperText="Please select your class type"
        >
          {/* Mapping through our pre-set dropdown menu objects/arrays */}
          {classTypes.map((option) => (
            <MenuItem key={option.type} value={option.type}>
              {option.type}
            </MenuItem>
          ))}
        </TextField>

        {/* Start Time Input */}
        <TextField
          id="start-time-input"
          label="Start Time"
          variant="outlined"
          onInput={(evt) => setStartTime(evt.target.value)}
        />

        {/* Duration Input */}
        <TextField
          id="duration-input"
          select
          label="Class Duration"
          value={duration}
          onChange={handleDurationChange}
          helperText="Please select your workout duration"
        >
          {durations.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>

        {/* Intensity Input */}
        <TextField
          id="intensity-input"
          select
          label="Workout Intensity"
          value={intensity}
          onChange={handleIntensityChange}
          helperText="Please select your workout intensity"
        >
          {intensities.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>

        {/* Location Input */}
        <TextField
          id="location-input"
          label="Location"
          variant="outlined"
          onInput={(evt) => setLocation(evt.target.value)}
        />

        {/* Max Capacity Input */}
        <TextField
          id="max-capacity-input"
          label="Max Capacity"
          variant="outlined"
          onInput={(evt) => setMaxCapacity(evt.target.value)}
        />
      </Box>
    </div>
  );
}
