import { useState } from 'react';

const TodoItem = ({ todo, onDelete, onEdit }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTask, setEditedTask] = useState(todo.task);
  
    const handleEdit = () => {
      const updatedTodo = { ...todo, task: editedTask };
      onEdit(updatedTodo);
      setIsEditing(false);
    };
  
    return (
      <div className="flex items-center justify-between border-b border-gray-300 py-2">
        {isEditing ? (
          <div className="flex flex-grow items-center">
            <input
              type="text"
              value={editedTask}
              onChange={(e) => setEditedTask(e.target.value)}
              className="flex-grow border border-gray-300 rounded-lg p-1 focus:outline-none focus:border-blue-500"
            />
            <button
              onClick={handleEdit}
              className="bg-green-500 text-white rounded-lg px-3 py-1 ml-2 hover:bg-green-600 transition"
            >
              Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="bg-red-500 text-white rounded-lg px-3 py-1 ml-2 hover:bg-red-600 transition"
            >
              Cancel
            </button>
          </div>
        ) : (
          <div className="flex-grow">
            <span className="text-lg">{todo.task}</span>
          </div>
        )}
        <div>
          {!isEditing && (
            <>
              <button
                onClick={() => setIsEditing(true)}
                className="bg-yellow-500 text-white rounded-lg px-3 py-1 hover:bg-yellow-600 transition"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(todo.id)}
                className="bg-red-500 text-white rounded-lg px-3 py-1 ml-2 hover:bg-red-600 transition"
              >
                Delete
              </button>
            </>
          )}
        </div>
      </div>
    );
  };
  
  export default TodoItem;
  