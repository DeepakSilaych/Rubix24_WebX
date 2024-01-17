import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from "./Pages/Homepage/index";
import Dashboard from './Pages/dashbord';
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={< Index />} />
        <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>
    </Router>
  );
}

export default App
