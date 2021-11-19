import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Typography, Button } from "@mui/material";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import ClassCard from "../ClassCard";
import noClassesImg from "../../assets/noClasses.svg";
import { Steps } from "intro.js-react";
import { instructorSteps } from "../walkthroughs";
import { getInstructorClasses } from "../../services";

const StyledInstructorContainer = styled.div`
  .welcome-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 1.5%;

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

export default function Instructor() {
  const [classes, setClasses] = useState(getInstructorClasses());

  const navigate = useNavigate();

  // useEffect(() => {
  //   /*
  //   axiosWithAuth.get(`url/classes`).then(res => {
  //     setClasses(res.data)
  //   })
  //   */
  // }, []);

  const handleDelete = (id) => {
    const updatedClasses = [...classes].filter((element) => element.id !== id);
    setClasses(updatedClasses);
    // make a delete action to the api, update the ui based on what is returned
    /**
     * axiosWithAuth.delete(`url/${id}`).then(res => {
     * setClasses(res.data)
     * })
     */
  };

  const handleReschedule = (id) => {
    navigate(`/rescheduleclass/${id}`);
    // update that classes start time on screen and on the api
  };

  const handleUpdate = (id) => {
    navigate(`/updateclass/${id}`);
    // on click of update button, send update to api and set all classes to whatever the api returns
  };

  const setWalkedThroughInstructor = () => {
    localStorage.setItem("walkedThroughInstructor", true);
  };

  return (
    <StyledInstructorContainer className="instructor-page">
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
            color="success"
            sx={{ mt: 1, mb: 2 }}
            className="create-button"
          >
            New Class
          </Button>
        </div>
      )}

      {classes && (
        <>
          <div className="welcome-container">
            <Typography variant="h4">Welcome, Instructor.</Typography>
            <Button
              onClick={() => {
                navigate("/createclass");
              }}
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 2 }}
              className="create-class-button"
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
      <Steps
        enabled={!localStorage.getItem("walkedThroughInstructor")}
        steps={instructorSteps()}
        initialStep={0}
        onExit={setWalkedThroughInstructor}
      />
    </StyledInstructorContainer>
  );
}
