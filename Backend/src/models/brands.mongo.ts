import { Schema } from 'mongoose'

type Brand = {
	id: string
	name: string
}

const brandSchema = new Schema<Brand>({
	id: { type: String, required: true },
	name: { type: String, required: true },
})
