import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Topic from "./pages/Topic";          // ✅ add this
import Topicspage from "./pages/Topicspage";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ paddingTop: "80px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/topics" element={<Topicspage />} />
          <Route path="/topic/:id" element={<Topic />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin" element={<Admin />} />
        



        </Routes>
      </div>
    </Router>
  );
}

export default App;
