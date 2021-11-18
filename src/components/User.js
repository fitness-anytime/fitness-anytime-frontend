import React, { useState } from "react";
import ClassCard from "./ClassCard";
import styled from "styled-components";
import { TextField, MenuItem, Typography } from "@mui/material";
import { previousDay } from "date-fns";

const classCards = [
  {
    name: "Pilates 101",
    type: "Pilates",
    date: "12/13/2021",
    startTime: 1700,
    duration: 60,
    level: 3,
    reserved: false,
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
    reserved: false,
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
    reserved: false,
    location: "123 Main St.",
    registered: 0,
    maxSize: 10,
    id: 2,
  },
];

const SearchBarContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h5 {
    flex-grow: 100%;

    margin-bottom: 1rem;
  }

  .searchMenu {
    width: 100px;
  }

  .MuiOutlinedInput-root {
    width: 100%;
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

  @media (min-width: 500px) {
    flex-direction: row;
    /* justify-content: space-evenly; */
    margin: 5px;

    .searchMenu {
      width: 15%;
      margin: 0 25px;
    }
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
  category: "",
  value: "",
};

export default function User() {
  const [classes, setClasses] = useState(
    classCards.sort(function (a, b) {
      if (a.reserved) return -1;
      if (b.reserved) return 1;
      return 0;
    })
  );
  const [searchParams, setSearchParams] = useState(initialSearchParams);
  const [isAnyReserved, setAnyReserved] = useState(
    classes.includes((classData) => classData.reserved)
  );
  const { category, value } = searchParams;

  const handleChange = (event) => {
    setSearchParams({
      ...searchParams,
      [event.target.name]: event.target.value,
    });
  };

  const handleReserve = (id) => {
    console.log("we are reserving a spot");
    const updatedClasses = [...classes];
    const tempClass = updatedClasses.find((element) => element.id === id);
    tempClass.reserved = true;
    setClasses(updatedClasses);
    setAnyReserved(true);

    // filter through classes by id, make sure to do class[reserved] = true
    // update api based on new class, axios.patch/post
    // setClasses to what is returned
  };

  const handleCancel = (id) => {
    console.log("we are canceling our reservation");
    // filter through classes by id, make sure to do class[reserved] = false
    const updatedClasses = [...classes];

    updatedClasses.map((curClass) => {
      curClass.reserved = false;
    });

    setClasses(updatedClasses);
    setAnyReserved(false);
    // update api based on new class, axios.patch/post
    // setClasses to what is returned
    // make sure to do class[reserved] = false
  };

  return (
    <>
      {/* Search Bar Category Selector */}
      <SearchBarContainer>
        <Typography variant="h5">Search Classes:</Typography>
        <TextField
          className="searchMenu"
          id="outlined-select-currency"
          select
          label="Search By:"
          name="category"
          value={category}
          onChange={handleChange}
        >
          <MenuItem key="initial" value="" />
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
          value={searchParams.value}
          onChange={handleChange}
        />
      </SearchBarContainer>

      <StyledCardsContainer>
        {
          // Keep search from happening until string is entered
          searchParams.value !== ""
            ? classes.map((classData) => {
                // Converting numbers to strings to use .include() method
                let classCategoryValue = classData[category];
                if (typeof classCategoryValue === "number") {
                  classCategoryValue = classCategoryValue.toString();
                }

                // Return and render class card only if the card contains the value inputted
                // by the user
                if (
                  classCategoryValue
                    ?.toLowerCase()
                    .includes(value.toLowerCase())
                ) {
                  // not case sensitive
                  return (
                    <ClassCard
                      isAnyReserved={isAnyReserved}
                      handleCancel={handleCancel}
                      handleReserve={handleReserve}
                      key={classData.id}
                      isInstructor={false}
                      {...classData}
                    />
                  );
                }

                return null;
              })
            : classes.map((classData) => {
                return (
                  <ClassCard
                    isAnyReserved={isAnyReserved}
                    handleCancel={handleCancel}
                    handleReserve={handleReserve}
                    key={classData.id}
                    isInstructor={false}
                    {...classData}
                  />
                );
              })
        }
      </StyledCardsContainer>
    </>
  );
}
