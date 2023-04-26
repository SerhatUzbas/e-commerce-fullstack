import React from 'react'
import { useHover } from '@mantine/hooks'
import { Badge, Box, BoxProps, Flex } from '@mantine/core'
import CategoryHeaderText from '../texts/CategoryHeaderText'

interface CategoryHeaderProps extends BoxProps {
	text: string
	badgeText?: string
	badgeColor?: string
	hoveredBadgeColor?: string
	textColor?: string
	hoveredTextColor?: string
	withBadge?: boolean
}

const CategoryHeader = ({
	text,
	badgeText = 'Yeni',
	badgeColor = '#dc2e2e',
	hoveredBadgeColor = '#f28232',
	textColor,
	hoveredTextColor,
	withBadge,
	...props
}: CategoryHeaderProps) => {
	const { ref, hovered } = useHover()
	return (
		<Box ref={ref} h={34} px={10} style={{ borderBottom: hovered ? '2px solid #f28232' : 'none' }} {...props}>
			<Flex gap={2} align='center'>
				<CategoryHeaderText color={hovered ? hoveredTextColor : textColor}>{text}</CategoryHeaderText>
				{withBadge && (
					<Badge
						w={30}
						h={16}
						radius={32}
						styles={{ root: { background: hovered ? hoveredBadgeColor : badgeColor, padding: 0, textTransform: 'none' }, inner: { color: '#ffffff' } }}>
						{badgeText}
					</Badge>
				)}
			</Flex>
		</Box>
	)
}

export default CategoryHeader
