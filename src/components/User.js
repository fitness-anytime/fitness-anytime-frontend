import React, { useState } from "react";
import ClassCard from "./ClassCard";
import styled from "styled-components";
import { TextField, MenuItem, Typography } from "@mui/material";
import { Steps } from "intro.js-react";
import { userSteps } from "./walkthroughs/index.js";
import { getUserClasses } from "../services";
import { userHasReservation } from "../services";

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
    margin: 5px;

    .searchMenu {
      width: 15%;
      margin: 0 25px;
    }
  }
`;
const SimpleDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const SimpleP = styled.p`
  margin: 0;
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

const initialSearchParams = {
  category: "",
  value: "",
};

export default function User() {
  const [classes, setClasses] = useState(getUserClasses());
  const [searchParams, setSearchParams] = useState(initialSearchParams);
  const [hasReservation, setHasReservation] = useState(
    userHasReservation(classes)
  );

  const { category, value } = searchParams;

  const handleChange = (event) => {
    setSearchParams({
      ...searchParams,
      [event.target.name]: event.target.value,
    });
  };

  const handleReserve = (id) => {
    const updatedClasses = [...classes];
    const tempClass = updatedClasses.find((element) => element.id === id);
    tempClass.reserved = true;
    setClasses(updatedClasses);
    setHasReservation(true);

    // filter through classes by id, make sure to do class[reserved] = true
    // update api based on new class, axios.patch/post
    // setClasses to what is returned
  };

  const handleCancel = (id) => {
    // filter through classes by id, make sure to do class[reserved] = false
    const updatedClasses = [...classes];

    updatedClasses.forEach((curClass) => {
      curClass.reserved = false;
    });

    setClasses(updatedClasses);
    setHasReservation(false);
    // update api based on new class, axios.patch/post
    // setClasses to what is returned
    // make sure to do class[reserved] = false
  };

  const setWalkedThroughUser = () => {
    localStorage.setItem("walkedThroughUser", true);
  };

  return (
    <div className="user-page">
      {/* Search Bar Category Selector */}
      {hasReservation === false ? (
        <SearchBarContainer className="search-bar">
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
      ) : (
        <SimpleDiv>
          <SimpleP>To attend a different class</SimpleP>
          <SimpleP>you must first cancel your existing reservation.</SimpleP>
        </SimpleDiv>
      )}

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
                      isAnyReserved={hasReservation}
                      handleCancel={handleCancel}
                      handleReserve={handleReserve}
                      key={classData.id}
                      className="user-card-walkthrough"
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
                    className="user-card-walkthrough"
                    isAnyReserved={hasReservation}
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
      <Steps
        enabled={!localStorage.getItem("walkedThroughUser")}
        steps={userSteps()}
        initialStep={0}
        onExit={setWalkedThroughUser}
      />
    </div>
  );
}
