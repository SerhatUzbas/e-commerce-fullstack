import { createStyles } from '@mantine/core'
import { Source_Sans_Pro } from 'next/font/google'

export const source_sans = Source_Sans_Pro({ weight: '400', subsets: ['latin'] })

export const source_sans_semibold = Source_Sans_Pro({ weight: '600', subsets: ['latin'] })

const useStyles = createStyles((theme) => ({
	grayText: { fontSize: 12, lineHeight: 15, color: '#999', ...source_sans.style },
}))

export default useStyles
