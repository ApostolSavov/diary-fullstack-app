import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"

import authController from 'controllers/authController'


const app = express()
dotenv.config()

mongoose.connect(process.env.MONGO_URL as string, { dbName: 'diaryApp' }).then(() => {
  console.log('connected to db')
})

app.use(cors())
app.use(express.json())

app.use('/auth', authController)

app.get('/ping', (_req, res) => res.json('it works.'))

app.listen(process.env.PORT as string, () => {
  console.log(`App running at port: ${process.env.PORT}`)
})