import { createGetInitialProps } from '@mantine/next'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { default_font } from 'src/styles/global_classes'

const getInitialProps = createGetInitialProps()

export default class _Document extends Document {
	static getInitialProps = getInitialProps

	render() {
		return (
			<Html lang='en'>
				<Head />
				<body style={{ margin: '0px !important', boxSizing: 'border-box' }}>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
