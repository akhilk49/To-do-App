import { useState } from 'react';

const AddTodo = ({ addTodo }) => {
    const [task, setTask] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (task.trim()) {
        addTodo(task);
        setTask('');
      }
    };
  
    return (
      <form onSubmit={handleSubmit} className="flex mb-4">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task"
          className="flex-grow border border-gray-300 rounded-lg p-2 mr-2 focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 transition"
        >
          Add
        </button>
      </form>
    );
  };
  
  export default AddTodo;
  