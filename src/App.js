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


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isInstructor, setIsInstructor] = useState(false);

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
          <Route path="/user" element={<User />} />
        </Route>

        <Route exact path="/instructor" element={<PrivateRoute />}>
          <Route exact path="/instructor" element={<Instructor />} />
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
