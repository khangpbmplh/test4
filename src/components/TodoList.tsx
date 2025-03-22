import React from 'react';
import { Todo } from '../App';
import './TodoList.css';

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo, deleteTodo }) => {
  if (todos.length === 0) {
    return (
      <div className="empty-list">
        <i className="far fa-sad-tear"></i>
        <p>No tasks yet! Add one above.</p>
      </div>
    );
  }

  const completedCount = todos.filter(todo => todo.completed).length;
  const totalCount = todos.length;

  return (
    <div className="todo-list">
      <div className="todo-header">
        <h2>Your Tasks</h2>
        <div className="todo-stats">
          <span className="todo-count">
            <i className="fas fa-tasks"></i> {completedCount}/{totalCount} completed
          </span>
        </div>
      </div>
      
      <ul>
        {todos.map((todo) => (
          <li 
            key={todo.id} 
            className={todo.completed ? 'completed' : ''}
          >
            <span className="todo-text" onClick={() => toggleTodo(todo.id)}>
              {todo.text}
            </span>
            <div className="todo-actions">
              <button 
                onClick={() => toggleTodo(todo.id)}
                className={todo.completed ? 'undo' : 'complete'}
              >
                {todo.completed ? (
                  <><i className="fas fa-undo"></i> Undo</>
                ) : (
                  <><i className="fas fa-check"></i> Complete</>
                )}
              </button>
              <button className="delete" onClick={() => deleteTodo(todo.id)}>
                <i className="fas fa-trash"></i> Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList; 