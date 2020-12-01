import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import App from './App';

it('renders the homepage\'s title', async () => {
  render(<App />)
  expect(screen.getByText('Les meilleurs freelances qui soient.')).toBeInTheDocument()
  await waitForElementToBeRemoved(() => screen.queryByText('Chargement…'))
})
