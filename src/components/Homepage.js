import React from "react";
import styled from "styled-components";
import yoga from "../assets/yoga.svg";
import { useNavigate } from "react-router-dom";

const Div = styled.div`
  background-color: #a81616;

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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 5%;
  margin-right: 30%;
  min-width: 150px;
  max-height: 50px;
`;

const Button = styled.button`
  margin: 5px;
  padding: 5px 40px;
  color: #ffffff;
  background-color: #000000;
  border: 1px solid white;
`;

const Image = styled.img`
  max-width: 40%;
`;

export default function Homepage() {
  const navigate = useNavigate();

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
        <ButtonContainer>
          <Button 
            onClick={() => {
              navigate("/Login");
            }} 
            value="Login" 
          >
            Login
          </Button>
          <Button 
            onClick={() => {
              navigate("/SignUp");
            }} 
            value="sign up"
          >
            Sign up
          </Button>
        </ButtonContainer>
        <Image alt="yoga" src={yoga} />
      </div>
    </Div>
  );
}
