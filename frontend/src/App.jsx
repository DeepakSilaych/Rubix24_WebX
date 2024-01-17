import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage/index";
import Optimise from "./Pages/optimise/index";
import Family from "./Pages/family/index";
import OTT from "./Pages/ott/index";
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={< Homepage />} />
        <Route path="/optimise" element={< Optimise/>} />
        <Route path="/family" element={< Family/>} />
        <Route path="/ott" element={< OTT/>} />

      </Routes>
    </Router>
  );
}

export default App
