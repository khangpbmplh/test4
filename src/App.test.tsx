import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders app title', () => {
  render(<App />);
  const titleElement = screen.getByText(/CI\/CD Demo: Todo List/i);
  expect(titleElement).toBeInTheDocument();
});

test('can add a new todo', async () => {
  render(<App />);
  
  // Find the input and add button
  const input = screen.getByTestId('todo-input');
  const addButton = screen.getByTestId('add-button');
  
  // Add a new todo
  fireEvent.change(input, { target: { value: 'Test new todo' } });
  fireEvent.click(addButton);
  
  // Wait for the timeout in the component to complete (it's 300ms)
  await waitFor(() => {
    expect(screen.getByTestId('todo-input')).not.toBeDisabled();
  }, { timeout: 1000 });
  
  // Check if the new todo is displayed (using queryByText to handle if not found)
  const newTodoElement = screen.queryByText('Test new todo');
  expect(newTodoElement).toBeInTheDocument();
});

test('can toggle todo completion', async () => {
  render(<App />);
  
  // Find the first todo text and click it to toggle completion
  const firstTodoText = screen.getByText('Learn GitHub Actions');
  fireEvent.click(firstTodoText);
  
  // Find the "Undo" text which indicates the todo was completed
  const undoText = await screen.findByText(/Undo/i);
  expect(undoText).toBeInTheDocument();
}); 