import { endOfDay, startOfDay } from 'date-fns'
import { prisma } from 'shared/infra/prisma/client'
import { ShortenURL, UrlRepositoryProtocol } from './UrlRepositoryProtocol'

class UrlRepositoryImpl implements UrlRepositoryProtocol {
  public async create(shortenURL: ShortenURL): Promise<ShortenURL> {
    return prisma.urls.create({
      data: shortenURL
    })
  }

  public async findById(id: string): Promise<ShortenURL | undefined> {
    const foundUrl = await prisma.urls.findUnique({
      where: {
        id
      }
    })

    return foundUrl || undefined
  }

  public async findByHash(hash: string): Promise<ShortenURL | undefined> {
    const foundUrl = await prisma.urls.findFirst({
      where: {
        hash
      }
    })

    return foundUrl || undefined
  }

  public async findByDate(createdAt: Date): Promise<ShortenURL[] | undefined> {
    const urls = await prisma.urls.findMany({
      where: {
        createdAt: {
          gt: startOfDay(createdAt),
          lt: endOfDay(createdAt)
        }
      }
    })

    return urls
  }
}

export { UrlRepositoryImpl }
