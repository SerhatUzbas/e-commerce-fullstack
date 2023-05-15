import { createStyles } from '@mantine/core'
import { Source_Sans_Pro } from 'next/font/google'

export const source_sans = Source_Sans_Pro({ weight: '400', subsets: ['latin'] })
export const source_sans_semibold = Source_Sans_Pro({ weight: '600', subsets: ['latin'] })
export const source_sans_bold = Source_Sans_Pro({ weight: '700', subsets: ['latin'] })

const useStyles = createStyles(() => ({
	grayText: { fontSize: 12, lineHeight: '15px', color: '#999', ...source_sans.style },
	discountText: { fontSize: 16, color: '#bb0000', ...source_sans_semibold.style },
	strikeThroughText: { fontSize: 16, color: '#878787', textDecoration: 'line-through', ...source_sans.style },
	searchResultText: { fontSize: 18, color: '#333333', ...source_sans_semibold.style },
	accordionTitle: { fontSize: 14, color: '#333333', ...source_sans_semibold.style },
	accordionItem: { fontSize: 13, color: '1B1B1B', ...source_sans.style },
	font20400: { fontSize: 20, color: '#333333', ...source_sans.style },
}))

export default useStyles
