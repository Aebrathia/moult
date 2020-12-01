import { rest } from 'msw'
import { freelances } from '../fixtures'

export const handlers = [
  rest.get('/api/v1/freelances', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(freelances)
    )
  })
]
