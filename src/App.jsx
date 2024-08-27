import { useState } from "react";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
      
    </>
  );
}

export default App;
