import React, { useState } from "react";
import ClassCard from "./ClassCard";
import styled from "styled-components";

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

export default function User() {
  const [classes, setClasses] = useState(classCards);
  return (
    <>
      <input placeholder="Search Bar" />
      <StyledUserContainer>
        {/* 
        --GET class data from API--
        --Map through class array to render to page here, inputting data as props--
      */}
        {classes.map((classData) => {
          return (
            <ClassCard
              className="classCard"
              key={classData.id}
              isInstructor={false}
              {...classData}
            />
          );
        })}
      </StyledUserContainer>
    </>
  );
}
