import { Grid, Stack, Text } from '@mantine/core'
import React from 'react'
import BasketHighlight from 'src/components/basket/BasketHighlight'
import BasketWrapper, { BasketWrapperProps } from 'src/components/basket/BasketWrapper'
import RelatedProducts from 'src/components/product/Related'
import Layout from 'src/layouts/Layout'
import { ALL_PRODUCTS } from 'src/lib/CONSTANTS'

const BASKET_DATA: { generalTotal: number; productTotal: number; data: BasketWrapperProps['data'] } = {
	generalTotal: 412312,
	productTotal: 12512341,
	data: [
		{
			brand: { id: 1, name: 'Tonny Black', rating: 4 },
			category: { id: 2, name: 'Ayakkabı' },
			campaigns: [{ id: 4123, name: 'asdasd' }],
			// campaigns: { id: 3, name: 'Kargo Bedava' },
			name: 'Erkek Siyah Kırmızı Rahat Kalıp Termo Taban Bağcıklı Sneaker',
			size: 43,
			id: 4,
			price: { originalPrice: 5, discountedPrice: 230 },
			color: 'kırmızı',
			rating: { averageRating: 4.5, totalCount: 4124 },
			seller: { name: 'Uzbaşlar', id: 341 },
			favCount: 1245,
			comments: [{ username: 'Serhat Uzbaş', comment: 'Çok şık rahat bir ayakkabı tam numaramı aldım çok kaliteli durmuyor ama fiyatının üstünde bir ayakkabı tavsiye ederim' }],
			availables: [
				{ label: '40', value: '40' },
				{ label: '41', value: '41' },
				{ label: '42', value: '42' },
				{ label: '43', value: '43' },
				{ label: '44', value: '44' },
			],
			shippingTime: 2,
			quantity: 1,
			totalPrice: 51235,
			image: '/product.webp',
		},
		{
			brand: { id: 1, name: 'Tonny Black', rating: 4 },
			category: { id: 2, name: 'Ayakkabı' },
			campaigns: [{ id: 4123, name: 'asdasd' }],
			size: 43,
			// campaigns: { id: 3, name: 'Kargo Bedava' },
			name: 'Erkek Siyah Kırmızı Rahat Kalıp Termo Taban Bağcıklı Sneaker',
			id: 4,
			price: { originalPrice: 5, discountedPrice: 230 },
			color: 'kırmızı',
			rating: { averageRating: 4.5, totalCount: 4124 },
			seller: { name: 'Uzbaşlar', id: 341 },
			favCount: 1245,
			comments: [{ username: 'Serhat Uzbaş', comment: 'Çok şık rahat bir ayakkabı tam numaramı aldım çok kaliteli durmuyor ama fiyatının üstünde bir ayakkabı tavsiye ederim' }],
			availables: [
				{ label: '40', value: '40' },
				{ label: '41', value: '41' },
				{ label: '42', value: '42' },
				{ label: '43', value: '43' },
				{ label: '44', value: '44' },
			],
			shippingTime: 2,
			quantity: 1,
			totalPrice: 51235,
			image: '/product.webp',
		},
		{
			brand: { id: 1, name: 'Tonny Black', rating: 4 },
			category: { id: 2, name: 'Ayakkabı' },
			campaigns: [{ id: 4123, name: 'asdasd' }],
			// campaigns: { id: 3, name: 'Kargo Bedava' },
			name: 'Erkek Siyah Kırmızı Rahat Kalıp Termo Taban Bağcıklı Sneaker',
			size: 42,
			id: 4,
			price: { originalPrice: 5, discountedPrice: 230 },
			color: 'kırmızı',
			rating: { averageRating: 4.5, totalCount: 4124 },
			seller: { name: 'Uzbaşlar', id: 341 },
			favCount: 1245,
			comments: [{ username: 'Serhat Uzbaş', comment: 'Çok şık rahat bir ayakkabı tam numaramı aldım çok kaliteli durmuyor ama fiyatının üstünde bir ayakkabı tavsiye ederim' }],
			availables: [
				{ label: '40', value: '40' },
				{ label: '41', value: '41' },
				{ label: '42', value: '42' },
				{ label: '43', value: '43' },
				{ label: '44', value: '44' },
			],
			shippingTime: 2,
			quantity: 1,
			totalPrice: 51235,
			image: '/product.webp',
		},
	],
}

const Basket = () => {
	return (
		<Layout>
			<Grid>
				<Grid.Col md={9}>
					<Stack>
						<BasketWrapper data={BASKET_DATA.data} />
						<Text size={18} weight={600} color='#f27a1a'>
							Önerilen Ürünler
						</Text>
						<RelatedProducts data={ALL_PRODUCTS} />
					</Stack>
				</Grid.Col>
				<Grid.Col md={3} pos='relative'>
					<BasketHighlight pos='sticky' top={20} left={0} productTotal={BASKET_DATA.productTotal} cargoTotal={0} generalTotal={BASKET_DATA.generalTotal} />
				</Grid.Col>
			</Grid>
		</Layout>
	)
}

export default Basket
