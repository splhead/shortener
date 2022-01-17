import { nanoid } from 'nanoid'
import { isEqual } from 'date-fns'

import { ShortenURL, UrlRepositoryProtocol } from './UrlRepositoryProtocol'

class FakeUrlRepository implements UrlRepositoryProtocol {
  private urls: ShortenURL[] = []

  public async create(shortenURL: ShortenURL): Promise<ShortenURL> {
    const url: ShortenURL = {
      id: shortenURL.id || nanoid(),
      hash: shortenURL.hash || nanoid(10),
      shortURL: shortenURL.shortURL,
      originURL: shortenURL.originURL,
      createdAt: shortenURL.createdAt || new Date()
    }

    this.urls.push(url)

    return url
  }

  public async findById(id: string): Promise<ShortenURL | undefined> {
    const foundUrl = this.urls.find((url) => url.id === id)

    return foundUrl
  }

  public async findByHash(hash: string): Promise<ShortenURL | undefined> {
    const foundUrl = this.urls.find((url) => url.hash === hash)

    return foundUrl
  }

  public async findByDate(createdAt: Date): Promise<ShortenURL[] | undefined> {
    const urls = this.urls.filter(
      (url) => url.createdAt && isEqual(url.createdAt, createdAt)
    )

    return urls
  }
}

export { FakeUrlRepository }
