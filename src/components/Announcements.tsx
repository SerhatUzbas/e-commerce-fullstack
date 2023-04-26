import React from 'react'
import { Box, BoxProps, Center, Text } from '@mantine/core'
import { source_sans_semibold } from 'src/styles/global_classes'

interface AnnouncementsProps extends BoxProps {
	text: string
	textColor?: string
	gradientColors: string[]
}

const Announcements = ({ text, textColor = '#ffffff', gradientColors, ...props }: AnnouncementsProps) => {
	return (
		<Box w='100%' h={57} bg={`linear-gradient(90deg, ${gradientColors[0]} 0%, ${gradientColors[1]} 100% )`} style={{ borderRadius: 12 }} {...props}>
			<Center h='100%'>
				<Text size={18} color={textColor} style={{ ...source_sans_semibold.style }}>
					{text}
				</Text>
			</Center>
		</Box>
	)
}

export default Announcements
