import React from 'react'
import { Box, Stack } from '@mantine/core'
import ProductDetailed from 'src/components/product/ProductDetailed'
import Layout from 'src/layouts/Layout'
import RelatedProducts from 'src/components/product/Related'
import { ALL_PRODUCTS, COMMENTS } from 'src/lib/CONSTANTS'
import Comments from 'src/components/product/Comment'

const PRODUCT_DATA = {
	brand: { id: 1, name: 'Tonny Black', rating: 4 },
	category: { id: 2, name: 'Ayakkabı' },
	campaigns: [{ id: 3, name: 'Kargo Bedava' }],
	name: 'Erkek Siyah Kırmızı Rahat Kalıp Termo Taban Bağcıklı Sneaker',
	id: 4,
	image: '/product.webp',
	size: 42,
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
}

const Product = () => {
	return (
		<Layout>
			<Stack spacing={40}>
				<ProductDetailed data={PRODUCT_DATA} />
				<RelatedProducts data={ALL_PRODUCTS} />
				<Comments comments={COMMENTS.comments} totalCount={COMMENTS.totalCount} rating={COMMENTS.rating} />
			</Stack>
		</Layout>
	)
}

export default Product
