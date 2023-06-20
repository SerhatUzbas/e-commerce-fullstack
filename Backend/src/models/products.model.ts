import { Products } from './products.mongo'

export const getAllProducts = async () => {
	return await Products.find()
}
