import { Box, BoxProps, Flex, Image, Rating, Stack, Text } from '@mantine/core'
import GrayText from '../texts/GrayText'
import useStyles, { source_sans, source_sans_bold } from 'src/styles/global_classes'
import FastShip from './FastShip'
import { BorderRadius } from 'tabler-icons-react'
import Like from './Like'

export interface ProductHighlightProp extends BoxProps {
	data: {
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
	}
}

const ProductHighlight = ({ data, ...props }: ProductHighlightProp) => {
	const { classes } = useStyles()
	return (
		<Box h={496} p={8} style={{ border: '1px solid #E6E6E6', borderRadius: 8, cursor: 'pointer' }} {...props}>
			<Stack>
				<Box pos='relative'>
					<Image src={data?.image} alt='karaca' width='100%' height={305} />
					<Flex w='100%' pos='absolute' top={0} left={0} justify='space-between' align='flex-start'>
						<FastShip />
						<Like />
					</Flex>

					<Box pos='absolute' top={32} left={0}>
						<Flex gap={10} align='center'>
							{data?.isMostSelling && <Image src='/mostsell.webp' width={57.75} height={57.75} />}
							{data?.isStary && <Image src='/stary.webp' width={57.75} height={57.75} />}
						</Flex>
					</Box>
				</Box>

				<Stack spacing={5}>
					<Text size={14} style={{ ...source_sans.style }}>
						<Text style={{ ...source_sans_bold.style }}>{data?.brand} </Text>
						{`${data?.model} ${data?.class}`}
					</Text>

					<Flex gap={2} align='center'>
						<Rating value={data?.rating} size='xs' />
						<Text className={classes.grayText} size={20}>
							(225)
						</Text>
						<Image src='/camera.webp' alt='camera-icon' width={15} height={11} />
					</Flex>

					<Text className={classes.discountText} size='12px !important'>
						{data?.extraExp}
					</Text>

					<Flex gap={5} align='center'>
						<Text className={classes.strikeThroughText}>{data?.standartPrice} TL</Text>
						<Text className={classes.discountText}>{data?.standartPrice} TL</Text>
					</Flex>
				</Stack>
			</Stack>
		</Box>
	)
}

export default ProductHighlight
