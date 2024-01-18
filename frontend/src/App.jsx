import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Homepage from "./Pages/Homepage/index";
import Optimise from "./Pages/optimise/index";
import Family from "./Pages/family/index";
import OTT from "./Pages/ott/index";
import Index from "./Pages/Homepage/index";
import Dashboard from './Pages/dashbord';
import Login from "./Pages/Login";
import Profile from "./Pages/profile";
import NotFound from "./Pages/notfound";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={< Homepage />} />
        <Route path="/login" element={< Login />} />
        <Route path="/optimise" element={< Optimise/>} />
        <Route path="/family" element={< Family/>} />
        <Route path="/ott" element={< OTT/>} />
        <Route path='/dashboard' element={<Dashboard/>} />

        <Route path="/profile" element={< Profile/>} />

        <Route path="*" element={< NotFound />} />
      </Routes>
    </Router>
  );
}

export default App
