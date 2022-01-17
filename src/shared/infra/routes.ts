import { Router } from 'express'

import { CreateShortURLController } from 'modules/urls/controllers/CreateShortURLController'
import { FindShortURLByDateController } from 'modules/urls/controllers/FindShortURLByDateController'
import { FindShortURLByHashController } from 'modules/urls/controllers/FindShortURLByHashController'
import { FindShortURLByIdController } from 'modules/urls/controllers/FindShortURLByIdController'

const router = Router()

router.post('/', new CreateShortURLController().handle)
router.get('/', new FindShortURLByDateController().handle)
router.get('/:hash', new FindShortURLByHashController().handle)
router.get('/url/:id', new FindShortURLByIdController().handle)

export { router }
