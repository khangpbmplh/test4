import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders app title', () => {
  render(<App />);
  const titleElement = screen.getByText(/CI\/CD Demo: Todo List/i);
  expect(titleElement).toBeInTheDocument();
});

test('can add a new todo', () => {
  render(<App />);
  
  // Find the input and add button
  const input = screen.getByTestId('todo-input');
  const addButton = screen.getByTestId('add-button');
  
  // Add a new todo
  fireEvent.change(input, { target: { value: 'Test new todo' } });
  fireEvent.click(addButton);
  
  // Check if the new todo is displayed
  const newTodoElement = screen.getByText(/Test new todo/i);
  expect(newTodoElement).toBeInTheDocument();
});

test('can toggle todo completion', () => {
  render(<App />);
  
  // Find the first todo text and click it to toggle completion
  const firstTodoText = screen.getByText('Learn GitHub Actions');
  fireEvent.click(firstTodoText);
  
  // Find the "Undo" text which indicates the todo was completed
  const undoButton = screen.getByText(/Undo/i);
  expect(undoButton).toBeInTheDocument();
}); 