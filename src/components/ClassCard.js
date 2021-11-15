import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import styled from "styled-components";

const StyledButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-items: flex-end;
  align-items: center;
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

    id,
  } = props;

  const isInstructor = props.isInstructor;

  //   return (
  //     <div className="class-card">
  //         <h2>{name}</h2>
  //         <h3>{type}</h3>
  //         <p>Start Time: {startTime}</p>
  //         <p>Duration: {duration}</p>
  //         <p>Level: {level}</p>
  //         <p>Location: {location}</p>
  //         <p>Members Registered: {registered}</p>
  //         <p>Capacity: {maxSize}</p>

  //         if (!isInstructor) {
  //             --Reserve Button if {registered} < {maxSize}--
  //             --Reschedule Button--
  //             --Cancel Reservation Button--
  //         } else {
  //             --Update Button--
  //             --Delete Button--
  //         }
  //     </div>
  //   );

  const buttonStyles = {
    padding: "0.5rem 1rem",
    marginTop: "1rem",
    width: "80%",
  };

  return (
    <Card sx={{ maxWidth: 345, paddingBottom: "1rem" }}>
      <CardContent>
        <Typography gutterBottom variant="h3" component="div">
          {name}
        </Typography>
        <Typography gutterBottom variant="h4" component="div">
          {type}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Start Time: {startTime} <br />
          Duration: {duration} <br />
          Level: {level} <br />
          Location: {location} <br />
          Members Registered: {registered} <br />
          Capacity: {maxSize}
        </Typography>
      </CardContent>
      <StyledButtonsContainer>
        {/* Implement isInstructor conditional here(?) */}
        {/* User-only buttons */}

        {isInstructor ? (
          <>
            <Button size="small" variant="contained" style={buttonStyles}>
              Update
            </Button>
            <Button size="small" variant="contained" style={buttonStyles}>
              Delete
            </Button>
          </>
        ) : (
          <>
            <Button size="small" variant="contained" style={buttonStyles}>
              Reserve
            </Button>
            <Button size="small" variant="contained" style={buttonStyles}>
              Reschedule
            </Button>
            <Button size="small" variant="contained" style={buttonStyles}>
              Cancel Reservation
            </Button>
          </>
        )}

        {/* Instructor-only buttons */}
      </StyledButtonsContainer>
    </Card>
  );
}
