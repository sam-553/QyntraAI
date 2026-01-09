import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { clerkMiddleware, requireAuth } from '@clerk/express'
import aiRouter from './routes/aiRoutes.js'


dotenv.config()

const app = express()

// Middlewares
app.use(cors())
app.use(express.json())
app.use(clerkMiddleware())

// Test Route
app.get('/', (req, res) => {
  res.send('Server is live!')
})
app.use(requireAuth())
app.use('/api/ai',aiRouter);
// Port
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
