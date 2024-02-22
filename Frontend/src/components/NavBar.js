// src/components/NavBar.js
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./NavBar.css";
// import logo from "./assests/logo.jpg";

const NavBar = () => {
  const navigate = useNavigate();

  const handleChange = () => {
    navigate(`/addNewTask`);
  };
  return (
    <nav className="navbar">
      <div className="logo">
        <span className="Task-logo">Task</span>
        <span className="vine">Manager</span>
      </div>

      <ul className="nav-links">
        <li>
          <button onClick={handleChange} className="add-task-button">
            + Add New Task
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
