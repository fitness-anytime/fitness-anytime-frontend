import React, { useState, useEffect } from "react";
import ClassCard from "./ClassCard";
import styled from "styled-components";
import { TextField, MenuItem } from "@mui/material";

const classCards = [
  {
    name: "Pilates 101",
    type: "Pilates",
    date: "12/13/2021",
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
    date: "11/22/2021",
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
    date: "12/18/2021",
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

// initializing name as default category to prevent .toLowerCase() and .includes() 
// from trying to read undefined
const initialSearchParams = {
  category: "name",
  value: ""
}

export default function User() {
  const [classes, setClasses] = useState(classCards);
  const [searchParams, setSearchParams] = useState(initialSearchParams);
  const { category, value } = searchParams;

  const handleChange = (event) => {
    setSearchParams({ ...searchParams, [event.target.name]: event.target.value})
  }

  // Setting searchParams here to prevent string methods .toLowerCase() and .includes()
  // from breaking by reading undefined
  useEffect (() => {
    setSearchParams(initialSearchParams);
  }, [])

  return (
    <>
    {/* Search Bar Category Selector */}
    <TextField
      id="outlined-select-currency"
      select
      label="Category"
      name="category"
      value={category}
      onChange={handleChange}
    >
      <MenuItem key="name" value="name">
        Name
      </MenuItem>
      <MenuItem key="startTime" value="startTime">
        Time
      </MenuItem>
      <MenuItem key="date" value="date">
        Date
      </MenuItem>
      <MenuItem key="duration" value="duration">
        Duration
      </MenuItem>
      <MenuItem key="type" value="type">
        Type
      </MenuItem>
      <MenuItem key="level" value="level">
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
      value={value}
      onChange={handleChange}
    />    

    <StyledUserContainer>
        {classes.map((classData) => {
          // Converting numbers to strings to use .include() method       
          let classCategoryValue = classData[category];
          if (typeof classCategoryValue === 'number') {
            classCategoryValue = classCategoryValue.toString();
          }
          
          // Return and render class card only if the card contains the value inputted
          // by the user
          if (classCategoryValue.toLowerCase().includes(value.toLowerCase())) { // not case sensitive
            return (
              <ClassCard
                className="classCard"
                key={classData.id}
                isInstructor={false}
                {...classData}
              />
            );
          }
          return null;
        })}
      </StyledUserContainer>
    </>
  );
}
