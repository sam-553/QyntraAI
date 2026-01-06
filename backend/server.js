import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

// Middlewares
app.use(cors())
app.use(express.json())

// Test Route
app.get('/', (req, res) => {
  res.send('Server is live!')
})

// Port
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
