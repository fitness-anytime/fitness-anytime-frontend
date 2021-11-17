import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import styled from "styled-components";

const StyledButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-items: flex-end;
  align-items: center;

  button {
    padding: 0.5rem 1rem;
    margin-top: 1rem;
    width: 80%;
  }
`;

export default function ClassCard(props) {
  const {
    name,
    type,
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
    id,
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
          </>
        ) : (
          // User only buttons
          <>
            <Button
              onClick={() => {
                handleReserve(id);
              }}
              size="small"
              variant="contained"
              color="success"
            >
              Reserve
            </Button>

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
        )}
      </StyledButtonsContainer>
    </Card>
  );
}
