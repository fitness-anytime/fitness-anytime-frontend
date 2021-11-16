import React from "react";

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
  localStorage.setItem("token", "adsfasd");
  // localStorage.removeItem("token");

  return (
    <React.Fragment>
      <NavBar />

      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />

        {/* needs to be private */}

        <Route path="/user" element={<PrivateRoute />}>
          <Route path="/user" element={<User />} />
        </Route>

        <Route exact path="/instructor" element={<PrivateRoute />}>
          <Route exact path="/instructor" element={<Instructor />} />
        </Route>
        {/* needs to be private */}

        {/* needs to be private */}

        <Route exact path="/createclass" element={<PrivateRoute />}>
          <Route exact path="/createclass" element={<ClassForm />} />
        </Route>

        <Route exact path="/" element={<Homepage />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
