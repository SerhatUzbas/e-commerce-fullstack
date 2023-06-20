import { Schema } from 'mongoose'

export type BasketType = { userId: string; productId: string; amount: string }

const BasketSchema = new Schema<BasketType>({
	userId: { type: String, required: true },
	productId: { type: String, required: true },
	amount: {},
})
