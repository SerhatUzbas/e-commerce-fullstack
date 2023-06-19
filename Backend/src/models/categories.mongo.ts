import { Schema } from 'mongoose'

type Category = {
	name: string
	id: string
}

const categorySchema = new Schema<Category>({
	id: { type: String, required: true },
	name: { type: String, required: true },
})
