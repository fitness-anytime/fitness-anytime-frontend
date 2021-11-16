import React, { useState } from "react";
import ClassCard from "./ClassCard";
import styled from "styled-components";
import { TextField, MenuItem } from "@mui/material";

const classCards = [
  {
    name: "Pilates 101",
    type: "Pilates",
    startTime: 1700,
    duration: 60,
    level: 3,
    location: "123 Main St.",
    registered: 0,
    maxSize: 10,
    id: 0,
  },
  {
    name: "Jazzercising With Jim",
    type: "Aerobic",
    startTime: 900,
    duration: 60,
    level: 1,
    location: "123 Main St.",
    registered: 0,
    maxSize: 10,
    id: 1,
  },
  {
    name: "Anywhere Fitness Karate",
    type: "Karate",
    startTime: 1500,
    duration: 60,
    level: 2,
    location: "123 Main St.",
    registered: 0,
    maxSize: 10,
    id: 2,
  },
];

const StyledUserContainer = styled.div`
  .MuiCard-root {
    margin-right: 2rem;
    margin-left: 2rem;
    margin-top: 2rem;
    flex-direction: column;
  }

  @media (min-width: 500px) {
    .MuiCard-root {
      flex-direction: row;
    }
  }
`;

const initialSearchParams = {
  category: "",
  value: ""
}

export default function User() {
  const [classes, setClasses] = useState(classCards);
  const [searchParams, setSearchParams] = useState(initialSearchParams);

  const handleChange = (event) => {
    console.log(event.target.value)
    setSearchParams({ ...searchParams, [event.target.name]: event.target.value})
  }

  return (
    <>
    {/* Search Bar Category Selector */}
    <TextField
      id="outlined-select-currency"
      select
      label="Category"
      name="category"
      value={searchParams.category}
      onChange={handleChange}
    >
      <MenuItem key="startTime" value="startTime">
        Time
      </MenuItem>
      <MenuItem key="classDate" value="classDate">
        Date
      </MenuItem>
      <MenuItem key="duration" value="duration">
        Duration
      </MenuItem>
      <MenuItem key="classType" value="classType">
        Type
      </MenuItem>
      <MenuItem key="intensity" value="intensity">
        Intensity (1-5)
      </MenuItem>
      <MenuItem key="location" value="location">
        Location
      </MenuItem>
    </TextField>

    {/* Search Bar Input */}
    <TextField 
      id="standard-basic" 
      label="Search" 
      variant="standard" 
      name="value"
      value={searchParams.value}
      onChange={handleChange}
    />    

    <StyledUserContainer>
        {/* 
        --GET class data from API--
        --Map through class array to render to page here, inputting data as props--
      */}
        {classes.map((classData) => {
          // if (classData[searchParams.category].includes(searchParams.value)) {
            return (
              <ClassCard
                className="classCard"
                key={classData.id}
                isInstructor={false}
                {...classData}
              />
            );
          // }
          // return null;
        })}
      </StyledUserContainer>
    </>
  );
}
