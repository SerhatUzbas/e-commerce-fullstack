import { Box, BoxProps, Flex, Image, NumberInput, Stack, Text } from '@mantine/core'
import useStyles from 'src/styles/global_classes'
import { Trash } from 'tabler-icons-react'
import { ProductDetailedProps } from '../product/ProductDetailed'
import CNumberInput from '../Inputs/CNumberInput'

interface BasketItemProps extends BoxProps {
	data: ProductDetailedProps['data'] & {
		quantity: number
		totalPrice: number
	}
}

const BasketItem = ({ data, ...props }: BasketItemProps) => {
	const { classes } = useStyles()
	return (
		<Box>
			<Flex align='center' justify='space-around'>
				<Flex gap={10} align='center'>
					<Image src={data?.image} alt={data?.name} width={70} height={105} />
					<Stack spacing={5}>
						<Text>
							<b>{data?.brand?.name}</b> {data?.name}
						</Text>
						<Text className={classes.grayText}>Beden: {data?.size}</Text>
						<Text className={classes.grayText}>Tahmini kargoya teslim: 3 gün içinde</Text>
					</Stack>
				</Flex>
				{/* <NumberInput value={data?.quantity} /> */}
				<CNumberInput value={data?.quantity} />
				<Text size={16} weight={600} color='#f27a1a'>
					{data?.totalPrice.toLocaleString('de')} TL
				</Text>
				<Trash style={{ cursor: 'pointer' }} />
			</Flex>
		</Box>
	)
}

export default BasketItem
