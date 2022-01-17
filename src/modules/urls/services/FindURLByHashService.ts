import { AppError } from 'shared/errors/AppError'
import { injectable, inject } from 'tsyringe'
import { UrlRepositoryProtocol } from '../repositories/UrlRepositoryProtocol'

type Request = {
  hash: string
}

@injectable()
class FindURLByHashService {
  constructor(
    @inject('UrlRepository')
    private urlRepository: UrlRepositoryProtocol
  ) {}

  public async execute({ hash }: Request) {
    const shortUrl = await this.urlRepository.findByHash(hash)

    if (!shortUrl) {
      throw new AppError({
        message: 'Url não encontrada',
        statusCode: 404
      })
    }

    return shortUrl
  }
}

export { FindURLByHashService }
