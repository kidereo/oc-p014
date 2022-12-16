import { render, screen } from '@testing-library/react';
import WealthHealth from './WealthHealth';

test('renders learn react link', () => {
  render(<WealthHealth />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
