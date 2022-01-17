import { AppError } from 'shared/errors/AppError'
import { injectable, inject } from 'tsyringe'
import { UrlRepositoryProtocol } from '../repositories/UrlRepositoryProtocol'

type Request = {
  date: Date
}

@injectable()
class FindURLByDateService {
  constructor(
    @inject('UrlRepository')
    private urlRepository: UrlRepositoryProtocol
  ) {}

  public async execute({ date }: Request) {
    const shortUrl = await this.urlRepository.findByDate(date)

    if (!shortUrl) {
      throw new AppError({
        message: 'Nenhuma Url encontrada'
      })
    }

    return shortUrl
  }
}

export { FindURLByDateService }
