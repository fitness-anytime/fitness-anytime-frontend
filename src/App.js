import React, { useState } from "react";

import NavBar from "./components/NavBar";

import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute.js";

import Login from "./components/Login";
import SignUp from "./components/SignUp";
import User from "./components/User.js";
import Instructor from "./components/instructor/Instructor";
import Homepage from "./components/Homepage.js";

import ClassForm from "./components/instructor/ClassForm";

// dummy data. Remove when connected to backend.
const classCards = [
  {
    name: "Pilates 101",
    type: "Pilates",
    date: "12/13/2021",
    startTime: 1700,
    duration: 60,
    level: 3,
    location: "123 Main St.",
    registered: 0,
    maxSize: 10,
    id: 0,
  },
  {
    reserved: true,
    name: "Jazzercising With Jim",
    type: "Aerobic",
    date: "11/22/2021",
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
    date: "12/18/2021",
    startTime: 1500,
    duration: 60,
    level: 2,
    location: "123 Main St.",
    registered: 0,
    maxSize: 10,
    id: 2,
  },
];

function App() {
<<<<<<< HEAD
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isInstructor, setIsInstructor] = useState(true);
=======
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isInstructor, setIsInstructor] = useState(false);
  const [classes, setClasses] = useState(classCards);
>>>>>>> bd4d5cf2afa42d1385f86ad68d4685b543625b95

  return (
    <React.Fragment>
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <Routes>
        <Route
          exact
          path="/login"
          element={
            <Login
              setIsInstructor={setIsInstructor}
              setIsLoggedIn={setIsLoggedIn}
            />
          }
        />

        <Route exact path="/signup" element={<SignUp />} />

        <Route path="/user" element={<PrivateRoute />}>
          <Route path="/user" element={
            <User 
              classes={classes} 
              setClasses={setClasses}
            />
          } />
        </Route>

        <Route exact path="/instructor" element={<PrivateRoute />}>
          <Route exact path="/instructor" element={
            <Instructor
              classes={classes} 
              setClasses={setClasses}
            />
          } />
        </Route>

        <Route exact path="/createclass" element={<PrivateRoute />}>
          <Route
            exact
            path="/createclass"
            element={
              <ClassForm
              // maybe
              // setClasses={setClasses}
              />
            }
          />
        </Route>

        <Route path="/updateclass" element={<PrivateRoute />}>
          <Route
            path="/updateclass/:id"
            element={
              <ClassForm
                // maybe
                // setClasses={setClasses}
                update={true}
              />
            }
          />
        </Route>

        <Route path="/rescheduleclass" element={<PrivateRoute />}>
          <Route
            path="/rescheduleclass/:id"
            element={
              <ClassForm
                // maybe
                // setClasses={setClasses}
                reschedule={true}
              />
            }
          />
        </Route>

        <Route
          exact
          path="/"
          isLoggedIn={isLoggedIn}
          element={
            <Homepage isInstructor={isInstructor} isLoggedIn={isLoggedIn} />
          }
        />
      </Routes>
    </React.Fragment>
  );
}

export default App;
