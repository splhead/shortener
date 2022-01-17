export type ShortenURL = {
  id?: string
  hash: string
  shortURL: string
  originURL: string
  createdAt?: Date
}

interface UrlRepositoryProtocol {
  create(shortenURL: ShortenURL): Promise<ShortenURL>
  findById(id: string): Promise<ShortenURL | undefined>
  findByHash(hash: string): Promise<ShortenURL | undefined>
  findByDate(createdAt: Date): Promise<ShortenURL[] | undefined>
}

export { UrlRepositoryProtocol }
