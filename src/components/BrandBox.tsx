import Image from 'next/image'
import { Box, BoxProps, Center, Stack } from '@mantine/core'
import CategoryHeader from './texts/CategoryHeaderText'
import { useHover } from '@mantine/hooks'

export interface BrandBoxProps extends BoxProps {
	name: string
	src: string
}

const BrandBox = ({ src, name, ...props }: BrandBoxProps) => {
	const { ref, hovered } = useHover()
	return (
		<Box style={{ cursor: 'pointer' }} {...props}>
			<Stack spacing={0} ref={ref} align='center'>
				<Center p={16} style={{ borderRadius: '100%', border: `1px solid ${hovered ? '#f28232' : '#f3f3f3'}`, transition: '.2s ease' }}>
					<Image src={src} alt={name} width={36} height={36} />
				</Center>
				<CategoryHeader textTransform='none' color={hovered ? '#f28232' : '#333333'} sx={{ transition: '.2s ease' }}>
					{name}
				</CategoryHeader>
			</Stack>
		</Box>
	)
}

export default BrandBox
