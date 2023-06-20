import mongoose, { Schema } from 'mongoose'

type SellerType = {
	name: string
	id: string
	rating: number
	voteCount: number
}

const SellerSchema = new Schema<SellerType>({
	id: { type: String, required: true },
	name: { type: String, required: true },
	rating: { type: Number, required: true },
	voteCount: { type: Number, required: true },
})

export const Sellers = mongoose.model('category', SellerSchema)
