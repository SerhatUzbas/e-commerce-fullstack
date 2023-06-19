import mongoose from 'mongoose'

export type User = { id?: number; name: string; age: number; gender: string; profession: string }

const userSchema = new mongoose.Schema({
	id: { type: Number, required: true },
	name: { type: String, required: true },
	age: { type: Number, required: true },
	gender: { type: String, required: true },
	profession: { type: String, required: true },
})

export const Users = mongoose.model('user', userSchema)
