// src/components/__tests__/LoginForm.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import LoginForm from '../LoginForm';

test('renders LoginForm and handles submit', () => {
  const handleSubmit = jest.fn();
  render(<LoginForm onSubmit={handleSubmit} />);

  const emailInput = screen.getByTestId('email-input');
  const passwordInput = screen.getByTestId('password-input');
  const submitButton = screen.getByRole('button', { name: /login/i });

  // ინპუტში ტექსტის ჩაწერა
  fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
  fireEvent.change(passwordInput, { target: { value: 'password' } });
  fireEvent.click(submitButton);

  // ფორმის სუბმითზე ფუნქციის გამშვების შემოწმება
  expect(handleSubmit).toHaveBeenCalledWith({
    email: 'test@example.com',
    password: 'password',
  });
});