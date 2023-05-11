import { ReactNode } from 'react'
import Image from 'next/image'
import { Box, Divider, Flex, Stack } from '@mantine/core'
import { useViewportSize } from '@mantine/hooks'
import GrayText from 'src/components/texts/GrayText'
import CategoryNav from 'src/components/category/CategoryNav'
import SearchBox from 'src/components/SearchBox'
import TextWithIcon from 'src/components/texts/TextWithIcon'
import { User } from 'tabler-icons-react'
import { Heart } from 'tabler-icons-react'
import { ShoppingCart } from 'tabler-icons-react'

const Layout = ({ children }: { children: ReactNode }) => {
	const { width } = useViewportSize()
	const smaller1300 = width < 1300

	return (
		<Box ml={smaller1300 ? 0 : (width - 1200) / 2} miw={1200} maw={1200}>
			<Stack mt={10} spacing={5}>
				<Flex gap={30} align='center' style={{ alignSelf: 'flex-end' }}>
					<GrayText>İndirim Kuponlarım</GrayText>
					<GrayText>Trendyol'da Satış Yap</GrayText>
					<GrayText>Yardım & Destek</GrayText>
				</Flex>
				<Flex justify='space-between' align='center'>
					<Image src='/tylogo.svg' alt='tylogo' width={146} height={59} />
					<SearchBox w={548} data={[]} />
					<Flex gap={40} align='center'>
						<TextWithIcon text='Giriş Yap' Icon={User} />
						<TextWithIcon text='Favorilerim' Icon={Heart} />
						<TextWithIcon text='Sepetim' Icon={ShoppingCart} />
					</Flex>
				</Flex>
				<CategoryNav />
				<Divider />
				<Box mt={8}>{children}</Box>
			</Stack>
		</Box>
	)
}

export default Layout
