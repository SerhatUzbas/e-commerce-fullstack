import { Box } from '@mantine/core'
import { PRODUCT_HL } from 'src/components/category/CONSTANTS'
import ProductHighlight from 'src/components/product/ProductHighlight'
import Layout from 'src/layouts/Layout'

const Electronics = () => {
	return (
		<Layout>
			<ProductHighlight data={PRODUCT_HL} />
		</Layout>
	)
}

export default Electronics
