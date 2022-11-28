import "./styles.css";
import Navbar from "./components/navbar";
import Table from "./components/tables";
import UserControl from "./components/Pages/user";
import ManagerControl from "./components/Pages/manager";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Table />} />
          <Route path="/UserControl" element={<UserControl />} />
          <Route path="/ManagerControl" element={<ManagerControl />} />
        </Routes>
      </Router>
    </div>
  );
}
