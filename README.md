# Task Management Application

This is a simple task management application built with the MERN (MongoDB, Express.js, React, Node.js) stack.

## Features

- Display a list of tasks with their names and statuses (completed or pending).
- Allow users to add new tasks.
- Provide an option to mark tasks as completed.
- Implement state management to handle the task data.
- Connect to a backend API for managing tasks.

## Prerequisites

- Node.js and npm installed.
- MongoDB server running.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/pavani-weerakoon/TaskManager/tree/master
  
 2. Install dependencies for the frontend:
   - cd Frontend
   - npm install
 3. Install dependencies for the backend:
  - cd ../backend
- npm install

## Running the Application

1. Start the backend server:
  - node index.js

2. Start the frontend:
- npm start

## API Endpoints
- Retrieve tasks: GET /api/tasks
- Add a task: POST /api/tasks
- Update task status: PUT /api/tasks/:id
  
## Dependencies
1. Frontend
- React
- Axios
2. Backend
- Express.js
- Mongoose
- dotenv

## License
This project is licensed under the MIT License - see the LICENSE file for details.
