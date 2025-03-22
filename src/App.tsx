import React, { useState, useEffect } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
  createdAt: Date;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    // Try to load from localStorage
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      try {
        return JSON.parse(savedTodos, (key, value) => {
          if (key === 'createdAt') return new Date(value);
          return value;
        });
      } catch (error) {
        console.error('Error parsing saved todos:', error);
      }
    }
    
    // Default initial todos
    return [
      { id: 1, text: 'Learn GitHub Actions', completed: false, createdAt: new Date() },
      { id: 2, text: 'Set up CI/CD pipeline', completed: false, createdAt: new Date() },
      { id: 3, text: 'Deploy to GitHub Pages', completed: false, createdAt: new Date() },
    ];
  });

  // Save to localStorage when todos change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
      createdAt: new Date(),
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="logo">
          <i className="fas fa-tasks"></i>
        </div>
        <div className="title">
          <h1>CI/CD Demo: Todo List</h1>
          <p>A beautiful React app with GitHub Actions CI/CD</p>
        </div>
        <div className="version-badge">v1.0.0</div>
      </header>
      <main>
        <TodoForm addTodo={addTodo} />
        <TodoList 
          todos={todos} 
          toggleTodo={toggleTodo} 
          deleteTodo={deleteTodo} 
        />
      </main>
      <footer>
        <p>
          <i className="fas fa-code-branch"></i> This app demonstrates CI/CD with GitHub Actions and GitHub Pages
        </p>
        <a href="https://github.com/your-username/cicd-demo" target="_blank" rel="noopener noreferrer" className="github-link">
          <i className="fab fa-github"></i> View on GitHub
        </a>
      </footer>
    </div>
  );
}

export default App; 