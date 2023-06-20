import { Schema } from 'mongoose'

export type BrandType = {
	id: string
	name: string
	rating: number
}

const BrandSchema = new Schema<BrandType>({
	id: { type: String, required: true },
	name: { type: String, required: true },
	rating: { type: Number },
})
