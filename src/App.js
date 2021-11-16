import React, { useState } from "react";

import NavBar from "./components/NavBar";

import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute.js";

import Login from "./components/Login";
import SignUp from "./components/SignUp";
import User from "./components/User.js";
import Instructor from "./components/instructor/Instructor";
import ClassForm from "./components/instructor/ClassForm";

import Homepage from "./components/Homepage.js";

function App() {
  localStorage.setItem("token", "adsfasd");
  // localStorage.removeItem("token");
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <React.Fragment>
      <NavBar isLoggedIn={isLoggedIn} />

      <Routes>
        <Route exact path="/login" element={<Login />} />

        <Route exact path="/signup" element={<SignUp />} />

        <Route path="/user" element={<PrivateRoute />}>
          <Route path="/user" element={<User />} />
        </Route>

        <Route exact path="/instructor" element={<PrivateRoute />}>
          <Route exact path="/instructor" element={<Instructor />} />
        </Route>

        <Route exact path="/createclass" element={<PrivateRoute />}>
          <Route exact path="/createclass" element={<ClassForm />} />
        </Route>

        <Route exact path="/" element={<Homepage />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
