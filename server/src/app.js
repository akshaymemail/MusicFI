import express from 'express'
import cors from 'cors'

// express app
const app = express()

// constants
const PORT = process.env.PORT || 5000

// middleware
app.use(cors())
app.use(express.json())

// root route
app.get('/', (req, res) => {
  res
    .status(200)
    .json({ message: 'Server is up and running. Cheers, Have some coffee!' })
})

// listen on port
app.listen(PORT, () => {
  console.log(`Server is up and running at : ${PORT}`)
})
