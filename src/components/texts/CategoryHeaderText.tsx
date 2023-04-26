import { CSSProperties } from 'react'
import { Text, TextProps } from '@mantine/core'
import { source_sans_semibold } from 'src/styles/global_classes'

interface CategoryHeaderTextProps extends TextProps {
	textTransform?: CSSProperties['textTransform']
}

const CategoryHeaderText = ({ children, textTransform = 'uppercase', ...props }: CategoryHeaderTextProps) => {
	return (
		<Text size={14} color='#333333' style={{ textTransform, letterSpacing: 0.18, lineHeight: '34px', cursor: 'pointer', ...source_sans_semibold.style }} {...props}>
			{children}
		</Text>
	)
}

export default CategoryHeaderText
