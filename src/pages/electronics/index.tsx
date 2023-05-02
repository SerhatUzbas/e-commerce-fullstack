import { Box, Grid } from '@mantine/core'
import SideBar from 'src/components/Sidebar/SideBar'
import { ALL_PRODUCTS, PRODUCT_HL, SIDEBAR_DATA } from 'src/lib/CONSTANTS'
import ProductHighlight from 'src/components/product/ProductHighlight'
import Layout from 'src/layouts/Layout'
import { useProductsStore } from 'src/stores/ProductStore'
import AllProducts from 'src/components/product/AllProducts'

const Electronics = () => {
	const { brands } = useProductsStore()
	console.log(brands)

	return (
		<Layout>
			<Grid>
				<Grid.Col md={2}>
					<SideBar data={SIDEBAR_DATA} />
				</Grid.Col>
				<Grid.Col md={10}>
					<AllProducts
						searchResult='Erkek Spor Ayakkabı araması için 100.000+ sonuç listeleniyor'
						data={ALL_PRODUCTS}
						orderData={[
							{ label: 'Artan Fiyat', value: '123123' },
							{ label: 'Azalan Fiyat', value: '18723' },
						]}
					/>
				</Grid.Col>
			</Grid>
		</Layout>
	)
}

export default Electronics
