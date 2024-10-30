
# To-Do App

This is a simple and elegant **To-Do Application** built using **React** for the frontend and **JSON Server** as a mock backend. The app allows users to add, edit, and delete tasks, helping them stay organized. The backend is powered by a JSON file that stores all tasks, mimicking a REST API.

---

## Features

- **Add Tasks**: Users can add new tasks to the list.
- **Edit Tasks**: Modify existing tasks to keep them updated.
- **Delete Tasks**: Remove tasks once completed.
- **Responsive Design**: Built with **Tailwind CSS** for a clean and modern UI.
- **Backend with JSON Server**: Simulates a RESTful API for data handling.

---

## Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Backend**: JSON Server
- **Deployment**: Render (for both client and server)

---

## Project Structure

```
To-do-app/
│
├── client/               # React frontend
│   ├── public/           
│   ├── src/              
│       ├── components/   # AddTodo, TodoItem, TodoList components
│       └── App.js        # Main application logic
│   ├── package.json      # Client dependencies
│
├── server/               # Backend with JSON Server
│   ├── db.json           # Mock database file
│   ├── package.json      # Server dependencies
│   └── server.js         # JSON Server configuration
│
└── README.md             # Project documentation
```

---

## Setup and Installation

### Prerequisites
- **Node.js** installed on your machine.
- **Yarn** (optional but recommended for dependency management).

### Backend Setup (JSON Server)

1. Navigate to the `server/` folder:
   ```bash
   cd server
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the backend server:
   ```bash
   node server.js
   ```
   The backend will be available at [http://localhost:3001](http://localhost:3001).

### Frontend Setup (React)

1. Navigate to the `client/` folder:
   ```bash
   cd client
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the React app:
   ```bash
   npm start
   ```
   The frontend will be available at [http://localhost:3000](http://localhost:3000).

---

## Deployment on Render

1. Deploy the backend:
   - Go to [Render](https://render.com).
   - Create a new **Web Service**.
   - Link your GitHub repository and point it to the `server/` folder.
   - Set the **Start Command** to:
     ```
     npm start
     ```

2. Deploy the frontend:
   - Create another **Web Service** for the frontend.
   - Point it to the `client/` folder in the same repository.

---

## Usage

- Add a new task using the input field and "Add" button.
- Edit or delete tasks using the corresponding buttons next to each task.

---
