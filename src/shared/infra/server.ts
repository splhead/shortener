import 'dotenv/config'
import cors from 'cors'
import express from 'express'

import { router } from './routes'

const port = process.env.PORT

const app = express()

app.use(cors)
app.use(router)

app.listen(port, () => {
  console.log(`Server running on port: ${port}`)
})
