import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import crewRouter from './routes/crew.routes'

const app = express()
const port: number = 3000
app.use(cors())
app.use(express.json())

dotenv.config()

mongoose.connect(process.env.MONGO_URI as string)
.then(() => console.log("Mongo Connected"))
.catch((error) => console.log(error))


app.use('/crew', crewRouter)




app.listen(port, () => {
    console.log("Server is running on port", `${port}`)
})
