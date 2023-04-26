import { Text, TextProps } from '@mantine/core'
import React from 'react'
import { source_sans } from 'src/styles/global_classes'

interface CategoryItemProps extends TextProps {}

const CategoryItem = ({ children, ...props }: CategoryItemProps) => {
	return (
		<Text size={13} color='#333333' style={{ lineHeight: '30px', ...source_sans.style }} {...props}>
			{children}
		</Text>
	)
}

export default CategoryItem
