import { Box, BoxProps, Flex, Grid, Rating, Stack, Text, Image as MantineImage, Divider, SegmentedControl, Button, Center } from '@mantine/core'
import Image from 'next/image'
import { useState } from 'react'
import useStyles, { source_sans, source_sans_semibold } from 'src/styles/global_classes'
import { Hanger, Heart, Tex } from 'tabler-icons-react'

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
		favCount: number
		seller: { name: string; id: number }
		comments: { username: string; comment: string }[]
		availables: { label: string; value: string }[]
		shippingTime?: number
	}
}

const ProductDetailed = ({ data, ...props }: ProductDetailedProps) => {
	const { classes } = useStyles()
	const [available, setAvailable] = useState<string>('')
	return (
		<Box {...props}>
			<Grid>
				<Grid.Col md={5}>
					<Image src='/product.webp' width={402} height={602} alt='' />
				</Grid.Col>
				<Grid.Col md={7}>
					<Stack spacing={15}>
						<Stack spacing={0}>
							<Box w='80%'>
								<Text className={classes.font20400} style={{ lineHeight: '25px' }}>
									<b>{data?.brand.name}</b> {data?.name}
								</Text>
							</Box>
							<Flex align='center' gap={3}>
								<Text className={classes.grayText}>Satıcı:</Text>
								<Text size={12} color='#4d8ee1' style={{ ...source_sans.style, lineHeight: '15px', cursor: 'pointer' }}>
									{data?.seller?.name}
								</Text>
							</Flex>
						</Stack>

						<Flex align='center' gap={6}>
							<Rating size='xs' value={data?.rating.averageRating} />
							<Flex align='center' gap={5}>
								<Text className={classes.grayText}>{data?.rating?.totalCount} değerlendirme </Text>
								<MantineImage src='/camera.webp' width={19} height={15} />
							</Flex>
							<Text className={classes.grayText}>{data?.comments?.length} yorum </Text>
						</Flex>
						<Divider color='rgba(151,151,151,.2)' />
						<Stack>
							<Flex align='center' gap={5}>
								<Text className={classes.accordionTitle}>Beden:</Text>
								<Text className={classes.grayText} style={{ fontSize: 14 }}>
									{available}
								</Text>
							</Flex>
							<SegmentedControl data={data?.availables} value={available} onChange={setAvailable} styles={{ label: { color: '#ffffff', fontSize: 16, background: '#ca1616' } }} />
							<Stack>
								<Flex align='center' gap={15}>
									<Button w='100%' size='xl' color='#f27a1a' radius='md' styles={{ root: { background: '#f27a1a' }, inner: { ...source_sans_semibold.style, letterSpacing: 1 } }}>
										Sepete Ekle
									</Button>
									<Center p={14} style={{ border: 'solid 1px #e6e6e6', borderRadius: 6 }}>
										<Heart color='#8c8c8c' width={32} height={30} />
									</Center>
								</Flex>
								<Flex justify='space-between' align='center'>
									<Flex gap={5}>
										<Text style={{ ...source_sans_semibold.style, fontSize: 12 }}>Tahmini Kargoya Teslim:</Text>
										<Text style={{ ...source_sans.style, fontSize: 12 }}>{data?.shippingTime} gün içinde</Text>
									</Flex>
									<Flex align='center' gap={5}>
										<Heart color='#999' width={16} height={15} />
										<Text className={classes.grayText}>{data?.favCount} favori </Text>
									</Flex>
								</Flex>
							</Stack>
						</Stack>
					</Stack>
				</Grid.Col>
			</Grid>
		</Box>
	)
}

export default ProductDetailed
