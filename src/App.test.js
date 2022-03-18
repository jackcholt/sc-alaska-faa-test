import { render, screen } from '@testing-library/react';
import App from './App';

test('renders bodies of water link', () => {
  render(<App />);
  const linkElement = screen.getByText(/bodies of water/i);
  expect(linkElement).toBeInTheDocument();
});
