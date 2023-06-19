import { config } from 'dotenv'
import express, { Application, Request, Response } from 'express'
import mongoose from 'mongoose'
import { userRouter } from './routes/users.controller'
import cors from 'cors'

config()

const url = 'mongodb://127.0.0.1:27017'
const app: Application = express()

app.use(express.json())
app.use(
	cors({
		origin: 'http://localhost:7070',
	})
)

app.get('/', (req: Request, res: Response) => {
	res.send('Express server with TypeScript')
})
app.use(userRouter)

const PORT = process.env.PORT || 4000

const startServer = async () => {
	mongoose.connection.on('open', () => console.log('connection on'))
	await mongoose.connect(url)
	app.listen(PORT, () => {
		console.log(`Server is listening on port ${PORT}`)
	})
}

startServer()
