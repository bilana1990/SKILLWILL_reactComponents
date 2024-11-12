// src/components/__tests__/Greeting.test.js
import { render, screen } from '@testing-library/react';
import Greeting from '../Greeting';

test('renders Greeting with name', () => {
  render(<Greeting name="Bilana" />);
  const greetingElement = screen.getByText(/hello, bilana!/i);
  expect(greetingElement).toBeInTheDocument();
});