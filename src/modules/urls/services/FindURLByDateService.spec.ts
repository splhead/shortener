import { FakeUrlRepository } from '../repositories/FakeUrlRepository'
import { FindURLByDateService } from './FindURLByDateService'

describe('FindURLByDate', () => {
  let fakeUrlRepository: FakeUrlRepository
  let service: FindURLByDateService

  beforeAll(() => {
    fakeUrlRepository = new FakeUrlRepository()
    service = new FindURLByDateService(fakeUrlRepository)
  })

  it('should find a urls by Date', async () => {
    const shortenURL = await fakeUrlRepository.create({
      hash: 'hash',
      shortURL: 'short-url',
      originURL: 'https://www.google.com'
    })

    const shortenURL2 = await fakeUrlRepository.create({
      hash: 'hash2',
      shortURL: 'short-url2',
      originURL: 'https://www.bing.com'
    })

    const date = shortenURL.createdAt || new Date()

    const findUrls = await service.execute({
      date
    })

    expect(findUrls).toEqual(expect.arrayContaining([shortenURL, shortenURL2]))
  })
})
