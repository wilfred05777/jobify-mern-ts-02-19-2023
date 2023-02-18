import express from 'express'
import dotenv from 'dotenv'

const app = express()

dotenv.config()

const PORT = 3000
console.log(`server running on port : ${PORT}`)

// app.listen(3000)
