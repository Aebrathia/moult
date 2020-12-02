import { rest } from 'msw'
import { freelances } from '../fixtures'

export const handlers = [
  rest.get('/api/v1/freelances', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(freelances)
    )
  }),
  rest.get('/api/v1/freelances/:id', (req, res, ctx) => {
    const { id } = req.params

    if (id > freelances.length) {
      return res(ctx.status(404))
    }

    return res(
      ctx.status(200),
      ctx.json(freelances[id - 1])
    )
  })
]
