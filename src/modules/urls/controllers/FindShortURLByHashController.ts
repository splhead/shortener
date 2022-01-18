import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { FindURLByHashService } from '@modules/urls/services/FindURLByHashService'
import { AppError } from '@shared/errors/AppError'

class FindShortURLByHashController {
  async handle(request: Request, response: Response) {
    const { hash } = request.params

    const service = container.resolve(FindURLByHashService)

    try {
      const result = await service.execute({ hash })

      return response.json(result)
    } catch (error) {
      console.log(error)
      if (error instanceof AppError)
        return response.status(error.statusCode!).json({ error: error.message })
    }
  }
}

export { FindShortURLByHashController }
