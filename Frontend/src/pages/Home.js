// src/pages/Home.js
import React from "react";
import "./Home.css";
import TaskList from "../components/TaskList";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <>
      <div className="Nav">
        <NavBar />
      </div>

      <div className="Task-list">
        <TaskList />
      </div>
    </>
  );
};

export default Home;
