import { AppError } from 'shared/errors/AppError'
import { injectable, inject } from 'tsyringe'
import { UrlRepositoryProtocol } from '../repositories/UrlRepositoryProtocol'

type Request = {
  id: string
}

@injectable()
class FindURLByIdService {
  constructor(
    @inject('UrlRepository')
    private urlRepository: UrlRepositoryProtocol
  ) {}

  public async execute({ id }: Request) {
    const shortUrl = await this.urlRepository.findById(id)

    if (!shortUrl) {
      throw new AppError({
        message: 'Url não encontrada',
        statusCode: 404
      })
    }

    return shortUrl
  }
}

export { FindURLByIdService }
