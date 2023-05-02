import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

interface ProductsState {
	brands: string[]
	setBrands: (value: string) => void
}

export const useProductsStore = create<ProductsState>()(
	devtools(
		immer((set) => ({
			brands: [],
			setBrands: (value) =>
				set((state) => {
					const isIncluded = state.brands.includes(value)
					state.brands = isIncluded ? state.brands.filter((item) => item !== value) : [...state.brands, value]
				}),
		})),
		{ name: 'Products', anonymousActionType: 'Products' }
	)
)
