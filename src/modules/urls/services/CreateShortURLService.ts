import { injectable, inject } from 'tsyringe'
import validUrl from 'valid-url'
import { nanoid } from 'nanoid'

import { AppError } from '@shared/errors/AppError'
import { UrlRepositoryProtocol } from '../repositories/UrlRepositoryProtocol'

type Request = {
  originURL: string
}

@injectable()
class CreateShortURLService {
  constructor(
    @inject('UrlRepository')
    private urlRepository: UrlRepositoryProtocol
  ) {}

  async execute({ originURL }: Request) {
    if (!validUrl.isWebUri(originURL)) {
      throw new AppError({
        message: 'URL inválida',
        statusCode: 400
      })
    }

    const hash = nanoid(10)

    const url = await this.urlRepository.create({
      hash,
      originURL,
      shortURL: `${process.env.BACKEND_URL}:${process.env.BACKEND_PORT}/${hash}`
    })

    return url
  }
}

export { CreateShortURLService }
