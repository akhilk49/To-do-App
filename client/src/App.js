import { useState, useEffect } from 'react';
import axios from 'axios';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/todos')
      .then((res) => setTodos(res.data))
      .catch((err) => console.error('Error fetching todos:', err));
  }, []);

  const addTodo = (task) => {
    const newTodo = {
      id: String(Date.now()), 
      task,
      completed: false,
    };
  
    axios.post('http://localhost:3001/todos', newTodo)
      .then((res) => setTodos([...todos, res.data]))
      .catch((err) => console.error('Error adding todo:', err));
  };  

  const deleteTodo = (id) => {
    axios.delete(`http://localhost:3001/todos/${id}`)
      .then(() => setTodos(todos.filter((todo) => todo.id !== id)))
      .catch((err) => console.error('Error deleting todo:', err));
  };

  const editTodo = (updatedTodo) => {
    axios.put(`http://localhost:3001/todos/${updatedTodo.id}`, updatedTodo)
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
  
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4">To-Do App</h1>
      <div className="bg-white rounded-lg shadow-md p-4 w-full max-w-lg">
        <AddTodo addTodo={addTodo} />
        <TodoList todos={todos} onDelete={deleteTodo} onEdit={editTodo} />
      </div>
    </div>
  );
};

export default App;
