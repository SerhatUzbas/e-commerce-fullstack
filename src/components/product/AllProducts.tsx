import { Box, BoxProps, Flex, Grid, Select, Stack, Text } from '@mantine/core'
import ProductHighlight, { ProductHighlightProp } from './ProductHighlight'
import { ALL_PRODUCTS, PRODUCT_HL } from 'src/lib/CONSTANTS'
import useStyles, { source_sans_semibold } from 'src/styles/global_classes'

interface AllProductsProps {
	searchResult: string
	data: ProductHighlightProp['data'][]
	orderData: { label: string; value: string }[]
}

const AllProducts = ({ searchResult, data, orderData }: AllProductsProps) => {
	const { classes } = useStyles()
	return (
		<Box>
			<Stack>
				<Flex justify='space-between' align='center'>
					<Text className={classes.searchResultText}>{searchResult}</Text>
					<Select placeholder='Önerilen Sıralama' data={orderData} />
				</Flex>
				<Grid>
					{data?.map((item, i) => (
						<Grid.Col key={i} md={3}>
							<ProductHighlight data={item} />
						</Grid.Col>
					))}
				</Grid>
			</Stack>
		</Box>
	)
}

export default AllProducts
