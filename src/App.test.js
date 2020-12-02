import { render, screen, waitForElementToBeRemoved, fireEvent } from '@testing-library/react'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

it('displays the homepage\'s title', async () => {
  render(<App />, { wrapper: BrowserRouter })
  expect(screen.getByText('Les meilleurs freelances qui soient.')).toBeInTheDocument()
  await waitForElementToBeRemoved(() => screen.queryByText('Chargement…'))
})

it('navigates to the profile page when clicking a freelance card', async () => {
  render(<App />, { wrapper: BrowserRouter })
  expect(screen.getByText('Les meilleurs freelances qui soient.')).toBeInTheDocument()
  expect(screen.queryByTestId('ProfilePage')).not.toBeInTheDocument()
  fireEvent.click(await screen.findByTitle('Voir le profil de Antoine Ribeiro'))
  expect(screen.getByTestId('ProfilePage')).toBeInTheDocument()
  await waitForElementToBeRemoved(() => screen.queryByText('Chargement…'))
})
