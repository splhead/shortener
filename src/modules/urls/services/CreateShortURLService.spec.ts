import { CreateShortURLService } from './CreateShortURLService'
import { FakeUrlRepository } from 'modules/urls/repositories/FakeUrlRepository'
import { AppError } from 'shared/errors/AppError'

describe('CreateShortURLService', () => {
  let service: CreateShortURLService
  let fakeUrlRepository: FakeUrlRepository

  beforeAll(() => {
    fakeUrlRepository = new FakeUrlRepository()
    service = new CreateShortURLService(fakeUrlRepository)
  })

  it('should make the url shorter', async () => {
    const url = 'https://www.google.com'

    const shortenURL = await service.execute({ originURL: url })

    expect(shortenURL.id).toBeDefined()
    expect(shortenURL.originURL).toBe(url)
  })

  it('should not make the url shorter when is not valid URL', async () => {
    const url = 'invalid-url34 -u23'

    await expect(service.execute({ originURL: url })).rejects.toBeInstanceOf(
      AppError
    )
  })
})
