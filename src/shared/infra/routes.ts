import { Router } from 'express'

import { ShortenerURLController } from '@modules/urls/controllers/ShotenerURLController'

const router = Router()

router.post('/', new ShortenerURLController().create)

export { router }
