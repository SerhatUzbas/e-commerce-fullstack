import { Box, BoxProps, Flex, Image, Stack, Text } from '@mantine/core'
import { MailFast } from 'tabler-icons-react'

interface FastShipProps extends BoxProps {}

const FastShip = ({ ...props }: FastShipProps) => {
	return (
		<Box w={72} h={24} p={2} bg='#0bc15c' style={{ borderRadius: 4 }} {...props}>
			<Flex gap={3} align='center'>
				<MailFast width={20} height={20} color='#faf9f9' />
				<Stack spacing={0}>
					<Text size={10} weight={600} color='#faf9f9' style={{ lineHeight: '9px' }}>
						HIZLI
					</Text>
					<Text size={10} weight={600} color='#faf9f9' style={{ lineHeight: '9px' }}>
						TESLİMAT
					</Text>
				</Stack>
			</Flex>
		</Box>
	)
}

export default FastShip
