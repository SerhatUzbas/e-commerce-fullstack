import { Box, Flex, Grid, Select, Stack, Text } from '@mantine/core'
import ProductHighlight, { ProductHighlightProp } from './ProductHighlight'
import useStyles from 'src/styles/global_classes'

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
					<Select size='xs' placeholder='Önerilen Sıralama' data={orderData} styles={{ input: { height: 20 } }} />
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
