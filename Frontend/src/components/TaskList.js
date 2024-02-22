// TaskList.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./TaskList.css";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetchTasks();
  }, []);
  //get all tasks
  const fetchTasks = async () => {
    try {
      const response = await axios.get("http://localhost:3001/tasks");
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error.message);
    }
  };
  //update task
  const handleStatusChange = async (taskId, name, newStatus) => {
    try {
      const response = await axios.put(
        `http://localhost:3001/tasks/${taskId}`,
        {
          name: name,
          completed: newStatus,
        }
      );

      const updatedTasks = tasks.map((task) =>
        task._id === taskId ? response.data : task
      );
      setTasks(updatedTasks);
      setSuccessMessage(`Task marked as completed successfully.`);
      setErrorMessage("");
    } catch (error) {
      console.error("Error updating task status:", error.message);
      setErrorMessage(
        `Failed to mark task "${name}" as completed. Please try again.`
      );
      setSuccessMessage("");
    }
  };
  //show each task when box is clicked
  const handleTaskClick = (taskId) => {
    const selectedTask = tasks.find((task) => task._id === taskId);
    setSelectedTask(selectedTask);
    setShowPopup(true);
  };

  const closeModal = () => {
    setShowPopup(false);
    setSuccessMessage("");
    setErrorMessage("");
  };

  return (
    <div className={`task-list-container ${showPopup ? "blurred" : ""}`}>
      {tasks.map((task) => (
        <div
          key={task._id}
          className={`task-box ${task.completed ? "completed" : "pending"}`}
          onClick={() => handleTaskClick(task._id)}
        >
          <h3>{task.name}</h3>
          <p>
            Status:{" "}
            <span className="status">
              {task.completed ? "Completed" : "Pending"}
            </span>
          </p>
        </div>
      ))}
      {/* show popup box message */}
      {showPopup && selectedTask && (
        <div className="popup">
          <div className="popup-header">
            <h2>{selectedTask.name}</h2>
            <button className="close-icon" onClick={closeModal}>
              &times;
            </button>
          </div>
          <p>Status: {selectedTask.completed ? "Completed" : "Pending"}</p>
          <div className="popup-buttons">
            {selectedTask.completed ? null : (
              <button
                onClick={() =>
                  handleStatusChange(
                    selectedTask._id,
                    selectedTask.name,
                    !selectedTask.completed
                  )
                }
              >
                Mark as Completed
              </button>
            )}
          </div>
          {successMessage && (
            <p className="success-message">{successMessage}</p>
          )}
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
      )}
    </div>
  );
};

export default TaskList;
