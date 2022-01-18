import { Request, Response } from 'express'

import { CreateShortURLService } from '@modules/urls/services/CreateShortURLService'
import { AppError } from '@shared/errors/AppError'
import { container } from 'tsyringe'

class CreateShortURLController {
  async handle(request: Request, response: Response) {
    const { url } = request.body

    const service = container.resolve(CreateShortURLService)

    try {
      const result = await service.execute({ originURL: url })

      return response.json(result)
    } catch (error) {
      console.log(error)
      if (error instanceof AppError)
        return response.status(error.statusCode!).json({ error: error.message })
    }
  }
}

export { CreateShortURLController }
