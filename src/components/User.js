import React, { useState, useEffect } from "react";
import ClassCard from "./ClassCard";
import styled from "styled-components";
import { TextField, MenuItem, Typography } from "@mui/material";

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

const SearchBarContainer = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;

  h5 {
    flex-grow: 100%;

    margin-bottom: 1rem;
  }

  .MuiTextField-root {
    margin: 0 1rem;
  }

  label {
    color: white !important;
  }

  svg {
    color: white !important;
  }
  div.MuiInput-underline::after {
    border-bottom: 2px solid white;
  }

  .Mui-focused fieldset {
    border-color: white !important;
  }
`;

const StyledCardsContainer = styled.div`
  padding-bottom: 2rem;

  .MuiCard-root {
    margin: 0 auto;
    margin-top: 2rem;
    flex-direction: column;
    padding-bottom: 2rem;
    max-width: 1500px;
    width: 90%;
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
  value: "",
};

export default function User() {
  const [classes, setClasses] = useState(classCards);
  const [searchParams, setSearchParams] = useState(initialSearchParams);
  const { category, value } = searchParams;

  const handleChange = (event) => {
    setSearchParams({
      ...searchParams,
      [event.target.name]: event.target.value,
    });
  };

  // Setting searchParams here to prevent string methods .toLowerCase() and .includes()
  // from breaking by reading undefined
  // useEffect(() => {
  //   setSearchParams(initialSearchParams);
  // }, []);

  const handleReserve = () => {
    console.log("we are reserving a spot");
    // make api update with some id
    // Change Text to "Spot Reserved"
    // Disable the button that triggered this event
  };

  const handleCancel = () => {
    console.log("we are canceling our reservation");
    // update members registered on the api to be one less then it currently is
  };

  return (
    <>
      {/* Search Bar Category Selector */}
      <SearchBarContainer>
        <Typography variant="h5">Search through the classes</Typography>
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
      </SearchBarContainer>

      <StyledCardsContainer>
        {classes.map((classData) => {
          // Converting numbers to strings to use .include() method
          let classCategoryValue = classData[category];
          if (typeof classCategoryValue === "number") {
            classCategoryValue = classCategoryValue.toString();
          }

          // Return and render class card only if the card contains the value inputted
          // by the user
          if (classCategoryValue.toLowerCase().includes(value.toLowerCase())) {
            // not case sensitive
            return (
              <ClassCard
                handleCancel={handleCancel}
                handleReserve={handleReserve}
                className="classCard"
                key={classData.id}
                isInstructor={false}
                {...classData}
              />
            );
          }
          return null;
        })}
      </StyledCardsContainer>
    </>
  );
}
