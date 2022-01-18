import { AppError } from '@shared/errors/AppError'
import { injectable, inject } from 'tsyringe'
import { UrlRepositoryProtocol } from '../repositories/UrlRepositoryProtocol'

type Request = {
  date: string
}

@injectable()
class FindURLByDateService {
  constructor(
    @inject('UrlRepository')
    private urlRepository: UrlRepositoryProtocol
  ) {}

  public async execute({ date }: Request) {
    try {
      const convertedDate = new Date(date)

      const shortUrl = await this.urlRepository.findByDate(convertedDate)

      if (!shortUrl) {
        throw new AppError({
          message: 'Nenhuma Url encontrada'
        })
      }

      return shortUrl
    } catch (error) {
      throw new AppError({
        message: 'data inválida'
      })
    }
  }
}

export { FindURLByDateService }
