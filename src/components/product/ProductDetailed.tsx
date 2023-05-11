import { Box, BoxProps, Flex, Grid, Rating, Stack, Text, Image as MantineImage, Divider, SegmentedControl, Button } from '@mantine/core'
import Image from 'next/image'
import { useState } from 'react'
import { Hanger } from 'tabler-icons-react'

interface ProductDetailedProps extends BoxProps {
	data: {
		brand: { id: number; name: string }
		category: { id: number; name: string }
		campaigns: { id: number; name: string }
		name: string
		id: number
		price: { originalPrice: number; discountedPrice: number }
		color?: string
		rating: { averageRating: number; totalCount: number }
		seller: { name: string; id: number }
		comments: { username: string; comment: string }[]
		availables: { label: string; value: string }[]
	}
}

const ProductDetailed = ({ data, ...props }: ProductDetailedProps) => {
	const [available, setAvailable] = useState<string>('')
	return (
		<Box {...props}>
			<Grid>
				<Grid.Col md={5}>
					<Image src='/product.webp' width={402} height={602} alt='' />
				</Grid.Col>
				<Grid.Col md={7}>
					<Stack>
						<Text></Text>
						<Text></Text>
						<Flex>
							<Rating />
							<Flex>
								<Text></Text>
								<MantineImage />
							</Flex>
							<Text>38 soru cevap</Text>
						</Flex>
						<Divider />
						<Stack>
							<Text></Text>
							<SegmentedControl data={data?.availables} value={available} onChange={setAvailable} />
							<Flex>
								<Hanger width={19} height={12} />
								<Text></Text>
								<Flex>
									<Button></Button>
									<Box>
										<Image />
									</Box>
								</Flex>
							</Flex>
						</Stack>
					</Stack>
				</Grid.Col>
			</Grid>
		</Box>
	)
}

export default ProductDetailed
