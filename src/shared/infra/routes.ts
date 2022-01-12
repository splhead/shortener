import { Router } from 'express'

import { ShortenerURLController } from '@modules/urls/controllers/ShotenerURLController'

const router = Router()

router.post('/urls', new ShortenerURLController().handle)

export { router }
