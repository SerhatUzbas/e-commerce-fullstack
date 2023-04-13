import React, { ComponentType } from 'react'
import { Box, BoxProps, Flex, Text } from '@mantine/core'
import { Source_Sans_Pro } from 'next/font/google'
import { IconProps } from 'tabler-icons-react'

interface TextWithIconProps extends BoxProps {
	Icon: ComponentType<IconProps>
	text: string
}

const source_sans_semibold = Source_Sans_Pro({ weight: '600', subsets: ['latin'] })

const TextWithIcon = ({ Icon, text }: TextWithIconProps) => {
	return (
		<Box>
			<Flex gap={5} align='center'>
				{<Icon width={15.2} height={16} />}
				<Text size={13} color='#333333' style={{ ...source_sans_semibold.style }}>
					{text}
				</Text>
			</Flex>
		</Box>
	)
}

export default TextWithIcon
