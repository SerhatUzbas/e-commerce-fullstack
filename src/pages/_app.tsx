import type { AppProps } from 'next/app'
import '../styles/global.css'
import { Source_Sans_Pro } from 'next/font/google'
import { MantineProvider } from '@mantine/core'
import Head from 'next/head'
// import { SkeletonProvider } from 'skeleton-react-loader'
const default_font = Source_Sans_Pro({ weight: ['200', '300', '400', '600', '700', '900'], subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
	return (
		// <SkeletonProvider theme={{ color: '#f0f0f0', opacityPoints: [0.1, 1], duration: 0.4, easing: 'circIn', animationType: 'slide' }}>
		<>
			<Head>
				<title>Trendyol</title>
				<meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
			</Head>

			<MantineProvider
				withGlobalStyles
				withNormalizeCSS
				theme={{
					/** Put your mantine theme override here */
					...default_font.style,
					colorScheme: 'light',
				}}>
				<Component {...pageProps} />
			</MantineProvider>
		</>
		// </SkeletonProvider>
	)
}
