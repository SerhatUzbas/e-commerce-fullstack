import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Box, Grid, Stack } from '@mantine/core'
import { ReactNode } from 'react'
import GrayText from 'src/components/texts/GrayText'
import TextWithIcon from 'src/components/TextWithIcon'
import { User } from 'tabler-icons-react'
import BrandBox from 'src/components/BrandBox'
import karaca from '../../public/karaca.webp'
import Announcements from 'src/components/Announcements'
import CategoryHeaderText from 'src/components/texts/CategoryHeaderText'
import CategoryHeader from 'src/components/CategoryHeader'
import HighlightedContents from 'src/components/HighlightedContents'
import SearchBox from 'src/components/SearchBox'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ children }: { children: ReactNode }) {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name='description' content='Generated by create next app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Box w='100%' h='100%'>
				<Stack align='center' h={500}>
					<SearchBox
						data={[
							{ label: 'askı', value: 'askı' },
							{ label: 'bardak', value: 'bardak' },
						]}
						w={700}
					/>
					<GrayText>Graytext</GrayText>
					<TextWithIcon text='Giriş Yap' Icon={User} />
					<CategoryHeaderText>Category Header </CategoryHeaderText>
					<BrandBox name='Karaca' src='/karaca.webp' />
					<Grid w={'100%'}>
						<Grid.Col md={4}>
							<Announcements text='Bu Yılın En İyi İndirmleri' gradientColors={['#469300', '#6df5c3']} />
						</Grid.Col>
						<Grid.Col md={4}>
							<Announcements text='Bu Yılın En İyi İndirmleri' gradientColors={['#469300', '#6df5c3']} />
						</Grid.Col>
						<Grid.Col md={4}>
							<Announcements text='Bu Yılın En İyi İndirmleri' gradientColors={['#469300', '#6df5c3']} />
						</Grid.Col>
					</Grid>
					<CategoryHeader text='Elektronik' />

					<Grid w='100%'>
						<Grid.Col md={4}>
							<HighlightedContents src='/high1.webp' text='adidas & Puma & Reebok' />
						</Grid.Col>
						<Grid.Col md={4}>
							<HighlightedContents src='/high1.webp' text='adidas & Puma & Reebok' />
						</Grid.Col>
						<Grid.Col md={4}>
							<HighlightedContents src='/high1.webp' text='adidas & Puma & Reebok' />
						</Grid.Col>
						<Grid.Col md={4}>
							<HighlightedContents src='/high1.webp' text='adidas & Puma & Reebok' />
						</Grid.Col>
						<Grid.Col md={4}>
							<HighlightedContents src='/high1.webp' text='adidas & Puma & Reebok' />
						</Grid.Col>
						<Grid.Col md={4}>
							<HighlightedContents src='/high1.webp' text='adidas & Puma & Reebok' />
						</Grid.Col>
					</Grid>
				</Stack>
			</Box>
		</>
	)
}
