import { Accordion, AccordionProps } from '@mantine/core'
import { useHover } from '@mantine/hooks'
import { title } from 'process'
import React from 'react'
import useStyles, { source_sans } from 'src/styles/global_classes'

interface CustomAccordionProps extends AccordionProps {
	accordionIdentifier: string
	title?: string
}

const CustomAccordion = ({ accordionIdentifier, title, children, ...props }: CustomAccordionProps) => {
	const { classes } = useStyles()
	const { ref, hovered } = useHover()

	return (
		<Accordion
			classNames={{ content: classes.accordionItem }}
			p={0}
			styles={{
				content: { padding: '1px', paddingBottom: 10, fontSize: 13, color: '1B1B1B', ...source_sans.style },
				// item: { border: 'none' },
				chevron: { color: hovered ? '#f28232' : '#999' },
				label: { paddingBottom: 10, paddingTop: 10 },
			}}
			{...props}>
			<Accordion.Item ref={ref} value={accordionIdentifier}>
				<Accordion.Control className={classes.accordionTitle} p={0}>
					{title}
				</Accordion.Control>
				<Accordion.Panel>{children}</Accordion.Panel>
			</Accordion.Item>
		</Accordion>
	)
}

export default CustomAccordion
