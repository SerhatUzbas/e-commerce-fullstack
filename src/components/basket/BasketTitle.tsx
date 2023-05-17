import { Box, BoxProps, Flex, Text } from '@mantine/core'
import NumberRating from '../NumberRating'
import useStyles from 'src/styles/global_classes'

interface BasketTitleProps extends BoxProps {
	sellerName: string
	sellerRating: string | number
}

const BasketTitle = ({ sellerName, sellerRating, ...props }: BasketTitleProps) => {
	const { classes } = useStyles()
	return (
		<Box bg='#fafafa' px={12} py={24} {...props}>
			<Flex align='center' gap={4}>
				<Text className={classes.grayText}>Satıcı:</Text>
				<Text size={14} weight={600}>
					{sellerName}
				</Text>
				<NumberRating rating={sellerRating} />
			</Flex>
		</Box>
	)
}

export default BasketTitle
