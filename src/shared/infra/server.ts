import 'reflect-metadata'
import 'dotenv/config'
import cors from 'cors'
import express from 'express'

import '@shared/di'

import { router } from './routes'

const port = process.env.BACKEND_PORT

const app = express()

app.use(express.json())

const corsOptions = {
  origin: process.env.BACKEND_URL
}

app.use(cors(corsOptions))
app.use(router)

app.listen(port, () => {
  console.log(`Server running on port: ${port}`)
})
