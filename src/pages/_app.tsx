import type { AppProps } from 'next/app'
import '../styles/global.css'
// import { SkeletonProvider } from 'skeleton-react-loader'

export default function App({ Component, pageProps }: AppProps) {
	return (
		// <SkeletonProvider theme={{ color: '#f0f0f0', opacityPoints: [0.1, 1], duration: 0.4, easing: 'circIn', animationType: 'slide' }}>
		<Component {...pageProps} />
		// </SkeletonProvider>
	)
}
