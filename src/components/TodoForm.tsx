import React, { useState } from 'react';
import './TodoForm.css';

interface TodoFormProps {
  addTodo: (text: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [text, setText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!text.trim()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate a small delay for visual feedback
    setTimeout(() => {
      addTodo(text);
      setText('');
      setIsSubmitting(false);
    }, 300);
  };

  return (
    <div className="todo-form">
      <h2><i className="fas fa-clipboard-list"></i> Add New Task</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="What needs to be done today?"
          data-testid="todo-input"
          disabled={isSubmitting}
        />
        <button 
          type="submit" 
          data-testid="add-button"
          disabled={isSubmitting || !text.trim()}
          className={isSubmitting ? 'submitting' : ''}
        >
          {isSubmitting ? 'Adding...' : 'Add Task'}
        </button>
      </form>
    </div>
  );
};

export default TodoForm; 