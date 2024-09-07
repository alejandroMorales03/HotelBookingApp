import express from 'express'
import { connectDB } from './config/db.js'
import config from './config/config.js'

const app = express()

connectDB()

app.use(express.json())

const PORT = config.server.port|| 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));