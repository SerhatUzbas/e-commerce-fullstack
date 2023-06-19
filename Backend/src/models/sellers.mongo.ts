import { Schema } from 'mongoose'

type SellerType = {
	name: string
	id: string
	rating: number
	voteCount: number
}

const categorySchema = new Schema<SellerType>({
	id: { type: String, required: true },
	name: { type: String, required: true },
	rating: { type: Number, required: true },
	voteCount: { type: Number, required: true },
})
