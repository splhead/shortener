import 'reflect-metadata'
import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import swaggerUi from 'swagger-ui-express'

import swaggerDocs from './swagger.json'

import '@shared/di'

import { router } from './routes'

const port = process.env.BACKEND_PORT

const app = express()

app.use(express.json())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

const corsOptions = {
  origin: process.env.BACKEND_URL
}

app.use(cors(corsOptions))
app.use(router)

app.listen(port, () => {
  console.log(`Server running on port: ${port}`)
})
