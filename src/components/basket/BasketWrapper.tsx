import { Box, BoxProps, Center, Flex, Text, Stack } from '@mantine/core'
import NumberRating from '../NumberRating'
import { Checks } from 'tabler-icons-react'
import BasketTitle from './BasketTitle'
import BasketItem from './BasketItem'
import { ProductDetailedProps } from '../product/ProductDetailed'

export interface BasketWrapperProps extends BoxProps {
	data: ({
		quantity: number
		totalPrice: number
	} & ProductDetailedProps['data'])[]
}

const BasketWrapper = ({ data, ...props }: BasketWrapperProps) => {
	return (
		<Box>
			<Stack>
				<Text size={24}>Sepetim (3 ürün)</Text>
				<Box
					pos='relative'
					mah={400}
					style={{ borderRadius: 12, border: '1px solid #f0f0f0' }}
					sx={{
						overflow: 'scroll',
						'::-webkit-scrollbar': { width: 0 },
						'::-webkit-scrollbar-track': { backgroundColor: '#FFF' },
						'::-webkit-scrollbar-thumb': { backgroundColor: '#FFF' },
					}}
					{...props}>
					<Stack spacing={0}>
						<BasketTitle pos='sticky' top={0} left={0} sellerName='Ürünler' sellerRating='7.8' />
						<Center bg='#ebfff4' w='100%' h={28}>
							<Flex gap={5} align='center'>
								<Checks color='#0bc15c' />
								<Text size={14} weight={600}>
									Kargo Bedava!
								</Text>
							</Flex>
						</Center>
						{data?.map((item, idx) => (
							<BasketItem key={idx} data={item} />
						))}
					</Stack>
				</Box>
			</Stack>
		</Box>
	)
}

export default BasketWrapper
