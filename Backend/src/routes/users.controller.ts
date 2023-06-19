import express, { Request, Response } from 'express'
import { addOrUpdateUser, deleteUser, getUser, getUsers } from '../models/users.model'
import { User } from 'src/models/users.mongo'

export const userRouter = express.Router()

// const getUsers = async (req: Request, res: Response) => {
// 	return res.status(200).json({ name: 'Serhat' })
// }

const getAllUsers = async (req: Request, res: Response) => {
	const allUsers = await getUsers()
	if (!!allUsers) return res.status(200).json(allUsers)
	else return res.status(404).json('Records not found')
}

const getSingleUser = async (req: Request<{ id: number }>, res: Response) => {
	const id = +req?.params?.id
	const singleUser = await getUser(id)
	console.log(id)
	if (!!singleUser) return res.status(200).json(singleUser)
	else return res.status(404).json('Hata')
}

const addUser = async (req: Request<any, any, User>, res: Response) => {
	const user = req?.body
	const isSuccess = await addOrUpdateUser(user)
	if (!!isSuccess) return res.status(200).json(user)
	else return res.status(400).json({ message: 'Hata', success: false })
}

const deleteUserFromDb = async (req: Request<{ id: number }>, res: Response) => {
	const id = req?.params?.id
	if (typeof id !== 'number') return res.status(404).json('ID must be number')

	const deletedUser = await deleteUser(id)
	if (!!deletedUser) return res.status(200).json(deletedUser)
	else return res.status(404).json('Record not found')
}

userRouter.get('/users', getAllUsers)
userRouter.get('/users/:id', getSingleUser)
userRouter.post('/users', addUser)
userRouter.patch('/users', addUser)
userRouter.delete('/users/:id', deleteUserFromDb)
