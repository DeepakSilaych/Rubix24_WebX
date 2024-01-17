import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from "./Pages/Homepage/index";
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={< Index />} />
      </Routes>
    </Router>
  );
}

export default App
