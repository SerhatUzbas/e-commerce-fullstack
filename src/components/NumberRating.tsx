import { Box, BoxProps, Text } from '@mantine/core'

interface NumberRatingProps extends BoxProps {
	rating: number | string
}

const NumberRating = ({ rating, ...props }: NumberRatingProps) => {
	return (
		<Box bg='rgb(242, 122, 26)' px={5} style={{ borderRadius: 6 }} {...props}>
			<Text size={10} color='#fff'>
				{rating}
			</Text>
		</Box>
	)
}

export default NumberRating
