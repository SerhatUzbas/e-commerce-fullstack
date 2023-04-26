import React from 'react'
import { Box, BoxProps, Image, Text } from '@mantine/core'
import { useHover } from '@mantine/hooks'
import { source_sans_semibold } from 'src/styles/global_classes'

interface HighlightedContentsProps extends BoxProps {
	src: string
	text: string
}

const HighlightedContents = ({ src, text }: HighlightedContentsProps) => {
	const { ref, hovered } = useHover()
	return (
		<Box ref={ref} style={{ borderRadius: 6, overflow: 'hidden' }}>
			<Box w='100%' h={187} style={{}}>
				<Image src={src} height={187} width='100%' style={{ transform: hovered ? 'scale(1.03)' : 'none', transition: '.8s ease' }} />
			</Box>
			<Box h={38} pt={12} py={9} pl={20} bg={hovered ? '#f28232' : '#1b1b1b'} style={{ borderBottomLeftRadius: 6, borderBottomRightRadius: 6, transition: '.5s ease' }}>
				<Text size={14} color='#ffffff' style={{ ...source_sans_semibold.style }}>
					{text}
				</Text>
			</Box>
		</Box>
	)
}

export default HighlightedContents
