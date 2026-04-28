import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'

import { createCrew, deleteCrew, getCrew, updateCrew } from './controllers/crew.controller'

const app = express()
app.use(cors())
app.use(express.json())

dotenv.config()

mongoose.connect(process.env.MONGO_URI as string)
.then(() => console.log("Mongo Connected"))
.catch((error) => console.log(error))



const port: number = 3000


app.get('/crew', getCrew)

app.post('/crew', createCrew)

app.put('/crew/:id', updateCrew)

app.delete('/crew/:id', deleteCrew)



app.listen(port, () => {
    console.log("Server is running on port", `${port}`)
})
