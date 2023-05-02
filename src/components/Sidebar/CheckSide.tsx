import { Box, BoxProps, Checkbox, ScrollArea, Stack } from '@mantine/core'
import { useProductsStore } from 'src/stores/ProductStore'
import CustomAccordion from '../CustomAccordion'
import useStyles from 'src/styles/global_classes'

interface CheckSideProps extends BoxProps {
	title: string
	data: { label: string; value: number }[]
}

const CheckSide = ({ title, data, ...props }: CheckSideProps) => {
	const { classes } = useStyles()
	const { setBrands } = useProductsStore()
	const maxHeight = 35.44 * data?.length
	const larger184 = maxHeight > 184
	return (
		<Box {...props}>
			<CustomAccordion accordionIdentifier='CheckSide' title={title}>
				<ScrollArea h={larger184 ? 184 : maxHeight}>
					<Stack>
						{data?.map((item) => (
							<Checkbox classNames={{ label: classes.accordionItem }} key={item.value} label={item.label} value={item.value} onChange={(e) => setBrands(e.target.value)} />
						))}
					</Stack>
				</ScrollArea>
			</CustomAccordion>
		</Box>
	)
}

export default CheckSide
