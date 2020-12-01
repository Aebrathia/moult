import { render, screen } from '@testing-library/react';
import App from './App';

it('renders the homepage\'s title', () => {
  render(<App />)
  expect(screen.getByText('Les meilleurs freelances qui soient.')).toBeInTheDocument()
})
