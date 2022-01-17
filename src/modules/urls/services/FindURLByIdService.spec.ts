import { AppError } from 'shared/errors/AppError'
import { FakeUrlRepository } from '../repositories/FakeUrlRepository'
import { FindURLByIdService } from './FindURLByIdService'

describe('FindURLById', () => {
  let fakeUrlRepository: FakeUrlRepository
  let service: FindURLByIdService

  beforeAll(() => {
    fakeUrlRepository = new FakeUrlRepository()
    service = new FindURLByIdService(fakeUrlRepository)
  })

  it('should find a url by id', async () => {
    const shortenURL = await fakeUrlRepository.create({
      hash: 'hash',
      shortURL: 'short-url',
      originURL: 'https://www.google.com'
    })

    const id = shortenURL.id ?? ''

    const findUrl = await service.execute({
      id
    })

    expect(findUrl).toEqual(shortenURL)
  })

  it('should not find a url if ID does not exist', async () => {
    await expect(
      service.execute({
        id: 'non-valid-id'
      })
    ).rejects.toBeInstanceOf(AppError)
  })
})
