import { render, screen } from '@testing-library/react'
import SkillPill from './SkillPill'

it('displays a skill', () => {
  render(<SkillPill>React</SkillPill>)

  expect(screen.getByText('React')).toBeInTheDocument()
})
