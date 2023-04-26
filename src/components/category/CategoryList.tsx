import { Box, BoxProps, Stack } from '@mantine/core'
import React from 'react'
import CategoryHeader from './CategoryHeader'
import Link from 'next/link'
import CategoryItem from './CategoryItem'

interface CategoryListProps extends BoxProps {
	header: string
	list: { text: string; url: string }[]
}

const CategoryList = ({ header, list, ...props }: CategoryListProps) => {
	return (
		<Box {...props}>
			<Stack>
				<CategoryHeader text={header} />
				<Stack>
					{list?.map((listItem) => (
						<Link href={listItem?.url}>
							<CategoryItem>{listItem?.text}</CategoryItem>
						</Link>
					))}
				</Stack>
			</Stack>
		</Box>
	)
}

export default CategoryList
