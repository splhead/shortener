import { AppError } from 'shared/errors/AppError'
import { FakeUrlRepository } from '../repositories/FakeUrlRepository'
import { FindURLByHashService } from './FindURLByHashService'

describe('FindURLByHash', () => {
  let fakeUrlRepository: FakeUrlRepository
  let service: FindURLByHashService

  beforeAll(() => {
    fakeUrlRepository = new FakeUrlRepository()
    service = new FindURLByHashService(fakeUrlRepository)
  })

  it('should find a url by hash', async () => {
    const shortenURL = await fakeUrlRepository.create({
      hash: 'hash',
      shortURL: 'short-url',
      originURL: 'https://www.google.com'
    })

    const findUrl = await service.execute({
      hash: shortenURL.hash
    })

    expect(findUrl).toEqual(shortenURL)
  })

  it('should not find a url if Hash does not exist', async () => {
    await expect(
      service.execute({
        hash: 'non-valid-hash'
      })
    ).rejects.toBeInstanceOf(AppError)
  })
})
