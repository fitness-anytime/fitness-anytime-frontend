import React, { useState } from "react";
import styled from "styled-components";
import ClassCard from "../ClassCard";

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
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;

  .MuiCard-root {
    margin-right: 2rem;
    margin-left: 2rem;
    margin-top: 2rem;
  }
`;

export default function Instructor() {
  const [classes, setClasses] = useState(classCards);

  return (
    <>
      <StyledInstructorContainer>
        {/* 
        --GET class data from API--
        --Map through class array to render to page here, inputting data as props--
      */}
        {classes.map((classData) => {
          return <ClassCard key={classData.id} isInstructor={true} {...classData} />;
        })}
      </StyledInstructorContainer>
    </>
  );
}
