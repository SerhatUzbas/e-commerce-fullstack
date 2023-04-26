import { Box, BoxProps, Flex } from '@mantine/core'
import { CategoryPopoverProps } from './CategoryPopover'
import CategoryHeaderText from '../texts/CategoryHeaderText'
import CategoryHeader from './CategoryHeader'

export interface CategoryNavProps extends BoxProps {}

const CategoryNav = ({ ...props }: CategoryNavProps) => {
	return (
		<Box px={6} pos='relative' {...props}>
			<Flex justify='space-between'>
				<CategoryHeader text='KADIN' />
				<CategoryHeader text='ERKEK' />
				<CategoryHeader text='ANNE & ÇOCUK' />
				<CategoryHeader text='EV & MOBİLYA' />
				<CategoryHeader text='SÜPERMARKET' />
				<CategoryHeader text='AYAKKABI & ÇANTA' />
				<CategoryHeader text='ELEKTRONİK' />
				<CategoryHeader text='SPOR & OUTDOOR' />
				<CategoryHeader text='ÇOK SATANLAR' withBadge />
				<CategoryHeader text='FLAŞ ÜRÜNLER' withBadge />
				{/* {topCategories.map((category) => (
					<Stack key={category.category} spacing={0}>
						<CategoryHeader text={category.category} />
 					</Stack>
				))} */}
			</Flex>
		</Box>
	)
}

export default CategoryNav
