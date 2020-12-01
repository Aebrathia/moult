import { render, screen } from '@testing-library/react'
import FreelanceCard from './FreelanceCard'
import { freelances } from '../../fixtures'

const freelance = freelances[0]

it('displays a freelance\'s summary', () => {
  render(
    <FreelanceCard
      freelance={freelance}
    />
  )

  expect(screen.getByText('Antoine Ribeiro')).toBeInTheDocument()
  expect(screen.getByText('Développeur Fullstack JavaScript')).toBeInTheDocument()
  expect(screen.getByText('Disponible')).toBeInTheDocument()
  expect(screen.getByText('React')).toBeInTheDocument()
  expect(screen.getByText('Node.js')).toBeInTheDocument()
  expect(screen.getByText('JavaScript')).toBeInTheDocument()
  expect(screen.getByAltText('Antoine Ribeiro, Développeur Fullstack JavaScript')).toHaveAttribute('src', 'https://cloudinary-a.akamaihd.net/hopwork/image/upload/h_360,w_360,c_thumb,g_face,z_0.4,dpr_2.0,f_auto/hityiw8t9n4ygmbovvbv.jpg')
})

it('does not display "Disponible" when not available', () => {
  render(
    <FreelanceCard
      freelance={{ ...freelance, available: false }}
    />
  )

  expect(screen.queryByText('Disponible')).not.toBeInTheDocument()
})

it('accepts additional custom classNames', () => {
  render(
    <FreelanceCard
      freelance={freelance}
      className="my-custom-className"
    />
  )

  expect(screen.getByTestId('FreelanceCard-1')).toHaveAttribute('class', expect.stringContaining('my-custom-className'))
})
