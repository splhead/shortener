import { Router } from 'express'

import { CreateShortURLController } from '@modules/urls/controllers/CreateShortURLController'

const router = Router()

router.post('/', new CreateShortURLController().handle)

export { router }
