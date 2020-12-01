import { render, screen } from '@testing-library/react'
import HomePage from './HomePage'

it('displays a list of freelances', () => {
  render(<HomePage />)

  expect(screen.getByText('Les meilleurs freelances qui soient.'))

  expect(screen.getByText('Antoine Ribeiro')).toBeInTheDocument()
  expect(screen.getByText('Développeur Fullstack JavaScript')).toBeInTheDocument()
  expect(screen.getByText('Disponible')).toBeInTheDocument()
  expect(screen.getByText('React')).toBeInTheDocument()
  expect(screen.getByText('Node.js')).toBeInTheDocument()
  expect(screen.getByText('JavaScript')).toBeInTheDocument()
  expect(screen.getByAltText('Antoine Ribeiro, Développeur Fullstack JavaScript')).toHaveAttribute('src', 'https://cloudinary-a.akamaihd.net/hopwork/image/upload/h_360,w_360,c_thumb,g_face,z_0.4,dpr_2.0,f_auto/hityiw8t9n4ygmbovvbv.jpg')

  expect(screen.getByText('Stanislas Vega')).toBeInTheDocument()
  expect(screen.getByText('Développeur Frontend React')).toBeInTheDocument()
  expect(screen.getByText('Next.js')).toBeInTheDocument()
  expect(screen.getByText('HTML')).toBeInTheDocument()
  expect(screen.getByText('CSS')).toBeInTheDocument()
  expect(screen.getByAltText('Stanislas Vega, Développeur Frontend React')).toHaveAttribute('src', 'https://media-exp1.licdn.com/dms/image/C5603AQFWeSH-pN0bGA/profile-displayphoto-shrink_400_400/0/1578294360332?e=1612396800&v=beta&t=8cC2qwqi7CBiA3ys0lP1FqYl5Tb4toNbC5lytz7uzWo')
})
