import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FormControlLabel, Checkbox } from "@mui/material";
import styled from "styled-components";

const StyledButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-items: center;
  align-items: center;

  button {
    padding: 0.5rem 1rem;
    margin-top: 1rem;
    width: 50%;
  }

  @media (min-width: 500) {
    justify-items: flex-end;
    align-items: flex-start;
  }
`;

export default function ClassCard(props) {
  const {
    name,
    type,
    date,
    startTime,
    duration,
    level,
    location,
    registered,
    maxSize,
    isInstructor,
    handleDelete,
    handleUpdate,
    handleReschedule,
    handleCancel,
    handleReserve,
    registeredMembers,
    id,
    reserved,
    isAnyReserved,
  } = props;

  return (
    <Card
      style={{
        display: "flex",
      }}
    >
      <CardContent
        style={{
          width: "75%",
          flexFlow: "column",
          marginLeft: "10%",
        }}
      >
        <Typography gutterBottom variant="h4" component="div">
          {name}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {type}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          style={{
            width: "50%",
            whiteSpace: "no-wrap",
          }}
        >
          Start Time: {startTime} <br />
          Date: {date} <br />
          Duration: {duration} <br />
          Level: {level} <br />
          Location: {location} <br />
          Members Registered: {registered} <br />
          Capacity: {maxSize}
        </Typography>
      </CardContent>
      <StyledButtonsContainer>
        {/* Instructor-only buttons */}
        {isInstructor ? (
          <>
            <StyledButtonsContainer className="instructor-buttons">
              <Button
                size="small"
                onClick={() => {
                  handleReschedule(id);
                }}
                variant="contained"
              >
                Reschedule
              </Button>

              <Button
                size="small"
                onClick={() => {
                  handleUpdate(id);
                }}
                variant="contained"
              >
                Update
              </Button>
              <Button
                color="error"
                size="small"
                onClick={() => {
                  handleDelete(id);
                }}
                variant="contained"
              >
                Delete
              </Button>
            </StyledButtonsContainer>
            <StyledButtonsContainer className="registered-members">
              <p>Currently Registered:</p>
              {registeredMembers?.map((member, i) => {
                return (
                  <FormControlLabel
                    sx={{ columnGap: 0 }}
                    className="formControl"
                    key={i}
                    control={<Checkbox value="true" color="primary" />}
                    label={member}
                  />
                );
              })}
            </StyledButtonsContainer>
          </>
        ) : // User only buttons
        reserved ? (
          <>
            <Typography
              sx={{ mt: 3, width: "85%", textAlign: "center" }}
              variant="h6"
            >
              Attending on {date} at {startTime}
            </Typography>
            <Button
              onClick={() => {
                handleCancel(id);
              }}
              color="error"
              size="small"
              variant="contained"
            >
              Cancel Reservation
            </Button>
          </>
        ) : (
          <Button
            onClick={() => {
              handleReserve(id);
            }}
            size="small"
            variant="contained"
            disabled={isAnyReserved}
            color="success"
          >
            Reserve
          </Button>
        )}
      </StyledButtonsContainer>
    </Card>
  );
}
