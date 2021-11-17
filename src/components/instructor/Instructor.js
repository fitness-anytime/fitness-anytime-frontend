import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import { Typography, Button } from "@mui/material";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import ClassCard from "../ClassCard";
import noClassesImg from "../../assets/noClasses.svg";

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

const StyledInstructorContainer = styled.div`
  .welcome-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    h4 {
      margin-top: 5%;
    }

    button {
      width: 200px;
      svg {
        margin-left: 1rem;
      }
    }
  }

  .instructor-cards-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 2rem;
  }

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

  .no-classes-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: max-content;
    margin: 2% auto auto;
    text-align: center;
    img {
      margin-bottom: 1.5rem;
      height: auto;
      width: 300px;
    }

    button {
      // left here to update
      // background-color: red;
    }

    @media (max-width: 460px) {
      width: 85%;
      margin-top: 6%;
      img {
        width: 50%;
        height: 50%;
      }
    }
  }
`;

export default function Instructor(props) {
  const [classes] = useState(classCards);

  const navigate = useNavigate();

  const handleDelete = () => {
    console.log("deleting class");

    // maybe incorp modal
    // make a delete action to the api, update the ui based on what is returned
  };

  const handleReschedule = () => {
    console.log("we are rescheduling");
    // pop up some type of modal
    // get the new date and time
    // update that classes start time on screen and on the api
  };

  const handleUpdate = (id) => {
    console.log("updating class");
    // redirect to the update a class page, populate the values
    navigate(`/updateclass/${id}`);
    // on click of update button, send update to api and set all classes to whatever the api returns
  };

  return (
    <StyledInstructorContainer>
      {!classes && (
        <div className="no-classes-container">
          <img src={noClassesImg} alt="empty clipboard illustration" />

          <Typography variant="h5">There is nothing here</Typography>
          <Typography variant="p">
            Create a class by clicking the <br />
            <b>New Class</b> button
          </Typography>

          <Button
            onClick={() => {
              navigate("/createclass");
            }}
            fullWidth
            variant="contained"
            sx={{ mt: 1, mb: 2 }}
          >
            New Class
          </Button>
        </div>
      )}

      {classes && (
        <>
          <div className="welcome-container">
            <Typography variant="h4">
              Welcome, Instructor.
            </Typography>
            <Button
              onClick={() => {
                navigate("/createclass");
              }}
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 2 }}
            >
              New Class
              <ControlPointIcon />
            </Button>
            <Typography variant="p">
              You have <b> {classes.length} </b> active classes:
            </Typography>
          </div>
          <div className="instructor-cards-container">
            {classes.map((classData) => {
              return (
                <ClassCard
                  handleDelete={handleDelete}
                  handleUpdate={handleUpdate}
                  handleReschedule={handleReschedule}
                  key={classData.id}
                  isInstructor={true}
                  {...classData}
                />
              );
            })}
          </div>
        </>
      )}
    </StyledInstructorContainer>
  );
}
