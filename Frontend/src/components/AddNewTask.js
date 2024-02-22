// AddNewTask.js
import React, { useState } from "react";
import axios from "axios";
import Modal from "react-modal";
import "./AddNewTask.css";

const AddNewTask = () => {
  const [newTask, setNewTask] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  //Add new task
  const addNewTask = async () => {
    try {
      const response = await axios.post("http://localhost:3001/tasks", {
        name: newTask,
        completed: false,
      });

      const createdTask = response.data;
      if (!createdTask) {
        setErrorMessage("Error adding task. Please try again.");
      } else {
        setModalOpen(true);
        setNewTask("");
        setErrorMessage("");
      }
    } catch (error) {
      console.error("Error adding task:", error.message);
      setErrorMessage("Error adding task. Please try again.");
    }
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="task-container">
      <div className="task-form-container">
        <div className="task-form-title">Add New Tasks</div>
        <h4>Provide information about the task you wish to complete.</h4>
        <p>Task Name:</p>
        <textarea
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="task-input"
          placeholder="Enter a new task"
        />
        <button onClick={addNewTask} className="task-button">
          Add Task
        </button>
        {/* show succes &error messages */}
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Task Added"
          className="modal"
          overlayClassName="overlay"
        >
          <div className="modal-header">
            <h2>Success!</h2>
            <button className="close-icon" onClick={closeModal}>
              &times;
            </button>
          </div>
          <p>A new task has been added.</p>
        </Modal>

        {errorMessage && (
          <div className="error-message">
            <p>{errorMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddNewTask;
