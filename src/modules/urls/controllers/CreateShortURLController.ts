import { Request, Response } from 'express'

import { CreateShortURLService } from '@modules/urls/services/CreateShortURLService'
import { AppError } from '@shared/errors/AppError'
import { container } from 'tsyringe'

class CreateShortURLController {
  async handle(request: Request, response: Response) {
    const { address } = request.body

    const service = container.resolve(CreateShortURLService)

    try {
      const result = await service.execute({ originURL: address })

      return response.json(result)
    } catch (error) {
      console.log(error)
      if (error instanceof AppError)
        return response.status(error.statusCode!).json({ error: error.message })
    }
  }
}

export { CreateShortURLController }
