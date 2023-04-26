import { Box, BoxProps, Flex, Stack } from '@mantine/core'
import CategoryList from './CategoryList'

export interface CategoryPopoverProps extends BoxProps {
	list: { header: string; list: { text: string; url: string }[] }[][]
}

const CategoryPopover = ({ list, ...props }: CategoryPopoverProps) => {
	return (
		<Box w='100%' bg='red' {...props}>
			<Flex gap={30}>
				{list.map((item) => (
					<Box>
						{item.map((subItem) => (
							<Stack>
								<CategoryList header={subItem.header} list={subItem?.list} />
							</Stack>
						))}
					</Box>
				))}
			</Flex>
		</Box>
	)
}

export default CategoryPopover
