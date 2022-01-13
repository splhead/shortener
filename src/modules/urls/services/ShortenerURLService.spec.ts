import { ShortenerURLService } from './ShortenerURLService'
import { prismaMock } from 'shared/infra/prisma/singleton'

describe('ShortenerURLService', () => {
  let service: ShortenerURLService

  beforeEach(() => {
    service = new ShortenerURLService(prismaMock)
  })

  it('should make the url shorter', async () => {
    const url = 'https://www.google.com'

    await expect(service.execute({ originURL: url })).resolves.toBeDefined()
  })
})
