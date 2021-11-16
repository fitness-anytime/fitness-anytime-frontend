import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import { IconButton, Typography, Button } from "@mui/material";
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

    h3 {
      margin-top: 2%;
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
    justify-content: space-evenly;
    flex-wrap: wrap;
  }

  .MuiCard-root {
    margin-right: 2rem;
    margin-left: 2rem;
    margin-top: 2rem;
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
  const [classes, setClasses] = useState(classCards);

  const navigate = useNavigate();

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
            <Typography variant="h3">
              Welcome, Instructor. Here Your Classes
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
              You have <b> {classes.length} </b> active classes
            </Typography>
          </div>
          <div className="instructor-cards-container">
            {classes.map((classData) => {
              return (
                <ClassCard
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
