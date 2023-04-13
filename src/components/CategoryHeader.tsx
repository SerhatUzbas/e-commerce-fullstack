import { Badge, Box, BoxProps, Flex } from '@mantine/core'
import React from 'react'
import CategoryHeaderText from './texts/CategoryHeaderText'

interface CategoryHeaderProps extends BoxProps {
	text: string
	badgeText?: string
	badgeColor?: string
	textColor?: string
}

const CategoryHeader = ({ text, badgeText = 'Yeni', badgeColor = '#dc2e2e', textColor, ...props }: CategoryHeaderProps) => {
	return (
		<Box {...props}>
			<Flex gap={2} align='center'>
				<CategoryHeaderText color={textColor}>{text}</CategoryHeaderText>
				<Badge w={30} h={16} radius={32} styles={{ root: { background: badgeColor, padding: 0, textTransform: 'none' }, inner: { color: '#ffffff' } }}>
					{badgeText}
				</Badge>
			</Flex>
		</Box>
	)
}

export default CategoryHeader
