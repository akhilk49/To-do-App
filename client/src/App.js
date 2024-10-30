import { useState, useEffect } from 'react';
import axios from 'axios';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import { FaUserCircle } from 'react-icons/fa';

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('https://to-do-app-fhpr.onrender.com/todos')
      .then((res) => setTodos(res.data))
      .catch((err) => console.error('Error fetching todos:', err));
  }, []);

  const addTodo = (task) => {
    const newTodo = {
      id: String(Date.now()),
      task,
      completed: false,
    };

    axios.post('https://to-do-app-fhpr.onrender.com/todos', newTodo)
      .then((res) => setTodos([...todos, res.data]))
      .catch((err) => console.error('Error adding todo:', err));
  };

  const deleteTodo = (id) => {
    axios.delete(`https://to-do-app-fhpr.onrender.com/todos/${id}`)
      .then(() => setTodos(todos.filter((todo) => todo.id !== id)))
      .catch((err) => console.error('Error deleting todo:', err));
  };

  const editTodo = (updatedTodo) => {
    axios.put(`https://to-do-app-fhpr.onrender.com/todos/${updatedTodo.id}`, updatedTodo)
      .then((res) => {
        setTodos(todos.map((todo) =>
          todo.id === updatedTodo.id ? res.data : todo
        ));
      })
      .catch((err) => {
        console.error('Error editing todo:', err.message);
        alert('Failed to edit the task. Please try again.');
      });
  };

  const deleteAllTodos = () => {
    Promise.all(todos.map((todo) =>
      axios.delete(`https://to-do-app-fhpr.onrender.com/todos/${todo.id}`)
    ))
      .then(() => setTodos([]))
      .catch((err) => console.error('Error deleting all todos:', err));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-blue-500 text-white py-4 shadow-md">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Organizap</h1>
          <FaUserCircle className="text-3xl" />
        </div>
      </nav>

      <div className="flex flex-col items-center p-6">
        <div className="bg-white rounded-lg shadow-md p-4 w-full max-w-lg mt-6">
          <AddTodo addTodo={addTodo} />
          {todos.length > 0 ? (
            <>
              <TodoList todos={todos} onDelete={deleteTodo} onEdit={editTodo} />
              <button
                onClick={deleteAllTodos}
                className="w-full bg-red-500 text-white rounded-lg px-4 py-2 mt-4 hover:bg-red-600 transition"
              >
                Delete All Tasks
              </button>
            </>
          ) : (
            <p className="text-center text-gray-500 mt-4">No Pending Tasks!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
