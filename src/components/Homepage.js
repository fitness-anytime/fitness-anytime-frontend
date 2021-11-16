import React from "react";
import styled from "styled-components";
import trainer from "../assets/personaltrainer.svg";

const Div = styled.div`
  background-color: #86a37a;

  height: 100%;
  min-height: 100vh;

  img {
    width: 60%;

    @media (max-width: 800px) {
      width: 90%;
    }
  }

  .image-container {
    display: flex;
    justify-content: flex-end;

    @media (max-width: 800px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

const Intro = styled.div`
  font-family: "Roboto";
  padding-top: 5%;
  padding-left: 5%;

  p {
    max-width: 1000px;
  }
`;

export default function Homepage() {
  return (
    <Div>
      <Intro>
        <h1> Welcome to Anywhere Fitness</h1>
        <p>
          At Anywhere Fitness, our mission is to provide you with a total
          fitness experience designed to help you reach your goals.
        </p>
        <p>
          Instructors can take attendance, request and process payments, create
          virtual “punch passes” for each type of class offered, alert clients
          of cancellations or location changes and so much more. Clients can
          easily find out information on classes - location, class size, start
          time and duration, as well as reschedule or cancel an upcoming
          appointment or reservation right from the mobile app.
        </p>
      </Intro>

      <div className="image-container">
        <img alt="personal trainer" src={trainer} />
      </div>
    </Div>
  );
}
