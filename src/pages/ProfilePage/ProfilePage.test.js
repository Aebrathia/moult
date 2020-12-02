import { render, screen } from '@testing-library/react'
import { BrowserRouter, Route } from 'react-router-dom'
import ProfilePage from './ProfilePage'

const Wrapper = ({ children }) => (
  <BrowserRouter>
    <Route path="/profile/:id">
      {children}
    </Route>
  </BrowserRouter>
)

it('displays all details of a freelance', async () => {
  window.history.pushState({}, 'Test', '/profile/1')
  render(<ProfilePage />, { wrapper: Wrapper })

  expect(screen.getByText('Chargement…')).toBeInTheDocument()

  expect(await screen.findByText('Antoine Ribeiro')).toBeInTheDocument()
  expect(screen.getByText('Développeur Fullstack JavaScript')).toBeInTheDocument()
  expect(screen.getByText('Disponible')).toBeInTheDocument()
  expect(screen.getByText('Compétences (3)')).toBeInTheDocument()
  expect(screen.getByText('React')).toBeInTheDocument()
  expect(screen.getByText('Node.js')).toBeInTheDocument()
  expect(screen.getByText('JavaScript')).toBeInTheDocument()
  expect(screen.getByAltText('Antoine Ribeiro, Développeur Fullstack JavaScript')).toHaveAttribute('src', 'https://cloudinary-a.akamaihd.net/hopwork/image/upload/h_360,w_360,c_thumb,g_face,z_0.4,dpr_2.0,f_auto/hityiw8t9n4ygmbovvbv.jpg')
})
