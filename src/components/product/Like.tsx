import { Box, BoxProps, Center, Flex } from '@mantine/core'
import { useHover } from '@mantine/hooks'
import { Heart } from 'tabler-icons-react'

interface LikeProps extends BoxProps {}

const Like = ({ ...props }: LikeProps) => {
	const { ref, hovered } = useHover()
	return (
		<Box ref={ref} w={43} h={43} style={{ borderRadius: '100%', boxShadow: ' 0px 3px 5px 2px #f0f0f0', cursor: 'pointer' }} {...props}>
			<Flex w='100%' h='100%' align='center' justify='center'>
				<Heart color={hovered ? '#f28232' : '#000000'} />
			</Flex>
		</Box>
	)
}

export default Like
