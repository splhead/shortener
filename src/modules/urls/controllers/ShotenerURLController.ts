import { Request, Response } from 'express'

class ShortenerURLController {
  async handle(request: Request, response: Response) {
    const { url } = request.body

    return response.json({ url })
  }
}

export { ShortenerURLController }
