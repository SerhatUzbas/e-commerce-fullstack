import { Box, Stack } from '@mantine/core'
import CheckSide from './CheckSide'
import TextSide from './TextSide'

// interface SideBarProps extends BoxProps {
// 	relatedCatsData: { label: string; value: number }[]
// 	sideBrandsData: { label: string; value: number }[]
// }

export interface SideBarProps {
	data: { title: string; isCheckBox: boolean; data: { label: string; value: number }[] }[]
}

const SideBar = ({ data, ...props }: SideBarProps) => {
	return (
		<Box {...props}>
			<Stack>{data?.map((item) => (item.isCheckBox ? <CheckSide title={item?.title} data={item?.data} /> : <TextSide title={item?.title} data={item?.data} />))}</Stack>
		</Box>
	)
}

export default SideBar
