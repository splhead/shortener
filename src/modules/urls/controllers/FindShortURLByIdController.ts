import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { FindURLByIdService } from '@modules/urls/services/FindURLByIdService'
import { AppError } from '@shared/errors/AppError'

class FindShortURLByIdController {
  async handle(request: Request, response: Response) {
    const { id } = request.params

    const service = container.resolve(FindURLByIdService)

    try {
      const result = await service.execute({ id })

      return response.json(result)
    } catch (error) {
      console.log(error)
      if (error instanceof AppError)
        return response.status(error.statusCode!).json({ error: error.message })
    }
  }
}

export { FindShortURLByIdController }
