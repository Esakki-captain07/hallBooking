import express from 'express'
import 'dotenv/config.js'
import routes from './src/routes/index.js'
import mongoose from './src/model/index.js'
const PORT = process.env.PORT
const app = express()
app.use(express.json())
app.use(routes)
app.listen(PORT,()=>console.log(`server listerning at port ${PORT}`))

