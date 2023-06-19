import { Request, Response } from 'express'
import { User, Users } from './users.mongo'

export const getUsers = async () => {
	return await Users.find({}, { _id: 0, __v: 0 })
}

export const getUser = async (id: number) => {
	return await Users.findOne({ id })
}

export const addOrUpdateUser = async (user: User) => {
	return await Users.updateOne({ id: user?.id }, user, { upsert: true })
}

export const deleteUser = async (id: number) => {
	const user = await Users.findOne({ id })
	console.log(user, 'user')

	if (!!user) {
		await Users.deleteOne({ id })
		return user
	} else return 'Record not found!'
}
