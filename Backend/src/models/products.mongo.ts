import { randomUUID } from 'crypto'
import mongoose, { Schema } from 'mongoose'

export type Product = {
	brand: { id: number; name: string; rating: number }
	category: { id: number; name: string }
	campaigns: { id: number; name: string }[]
	image: string
	name: string
	size: number | string
	id: string
	price: { originalPrice: number; discountedPrice: number }
	color?: string
	rating: { averageRating: number; totalCount: number }
	favCount: number
	seller: { name: string; id: number }
	// comments: { username: string; comment: string }[]
	comments: number[]
	availables: { label: string; value: string }[]
	shippingTime?: number
}

export type ProductComments = {
	comment: string
	productId: string
	id: string
	likeCount: number
	dislikeCount: number
}

const ProductSchema = new Schema<Product>({
	brand: { type: Number, required: true },
	category: { type: Number, required: true },
	campaigns: { type: [Number], required: true }, // Via id
	name: { type: String, required: true },
	id: { type: String, default: () => randomUUID() },
	price: { originalPrice: { type: Number, required: true }, discountedPrice: { type: Number, required: true } },
	color: { type: String, required: false },
	rating: { averageRating: { type: Number }, totalCount: { type: Number } },
	favCount: { type: Number },
	seller: { type: Number }, // Via id
	comments: { type: [Number] }, // Via id
})

export const Products = mongoose.model('product', ProductSchema)
