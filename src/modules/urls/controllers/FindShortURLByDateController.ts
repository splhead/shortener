import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { FindURLByDateService } from '@modules/urls/services/FindURLByDateService'
import { AppError } from 'shared/errors/AppError'

class FindShortURLByDateController {
  async handle(request: Request, response: Response) {
    const { date } = request.query

    const service = container.resolve(FindURLByDateService)

    try {
      const result = await service.execute({ date: String(date) })

      return response.json(result)
    } catch (error) {
      console.log(error)
      if (error instanceof AppError)
        return response.status(error.statusCode!).json({ error: error.message })
    }
  }
}

export { FindShortURLByDateController }
