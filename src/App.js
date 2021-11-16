import React from "react";

import NavBar from "./components/NavBar";

import { Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import SignUp from "./components/SignUp";
import User from "./components/User.js";
import Instructor from "./components/instructor/Instructor";
import ClassForm from "./components/instructor/ClassForm";

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>

      <Routes>
        <Route exact path="/login" element={<Login />} />

        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/user" element={<User />} />
        <Route exact path="/instructor" element={<Instructor />} />
        <Route exact path="/class-form" element={<ClassForm />} />

      </Routes>
    </div>
  );
}

export default App;
