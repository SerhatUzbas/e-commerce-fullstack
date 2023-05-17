import { Carousel } from '@mantine/carousel'
import { Box, BoxProps } from '@mantine/core'
import ProductHighlight from './ProductHighlight'

interface RelatedProductsProps extends BoxProps {
	data: {
		id: string | number
		image: string
		brand: string
		model: string
		class: string
		link: string
		rating: number
		rateCount: number
		extraExp?: string
		standartPrice: number
		discountedPrice?: number
		isMostSelling?: boolean
		isStary?: boolean
	}[]
}

const RelatedProducts = ({ data, ...props }: RelatedProductsProps) => {
	return (
		<Box {...props}>
			<Carousel align='start' slideGap={20} slideSize='18%' dragFree containScroll='keepSnaps' styles={{ control: { marginTop: -15, marginRight: -50, marginLeft: -50 } }}>
				{data?.map((item) => (
					<Carousel.Slide key={item?.id}>
						<ProductHighlight data={item} />
					</Carousel.Slide>
				))}
			</Carousel>
		</Box>
	)
}

export default RelatedProducts
