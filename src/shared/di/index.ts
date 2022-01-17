import { container } from 'tsyringe'

import { UrlRepositoryImpl } from '@modules/urls/repositories/UrlRepositoryImpl'
import { UrlRepositoryProtocol } from '@modules/urls/repositories/UrlRepositoryProtocol'

container.registerSingleton<UrlRepositoryProtocol>(
  'UrlRepository',
  UrlRepositoryImpl
)
