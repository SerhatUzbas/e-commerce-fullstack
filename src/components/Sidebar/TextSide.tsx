import { Box, BoxProps, ScrollArea, Stack, Text } from '@mantine/core'
import CustomAccordion from '../CustomAccordion'
import useStyles from 'src/styles/global_classes'

interface TextSideProps extends BoxProps {
	title: string
	data: { label: string; value: number }[]
}

const TextSide = ({ title, data, ...props }: TextSideProps) => {
	const { classes } = useStyles()
	const maxHeight = 20.44 * data?.length
	const larger184 = maxHeight > 184
	return (
		<Box {...props}>
			<CustomAccordion accordionIdentifier='textSide' title={title}>
				<ScrollArea h={larger184 ? 184 : maxHeight}>
					<Stack spacing={0}>
						{data?.map((item) => (
							<Text key={item.label} className={classes.accordionItem}>
								{item.label}
							</Text>
						))}
					</Stack>
				</ScrollArea>
			</CustomAccordion>
		</Box>
	)
}

export default TextSide
