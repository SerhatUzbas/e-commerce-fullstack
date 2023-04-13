import React from 'react'
import { Text, TextProps } from '@mantine/core'
import useStyles from 'src/styles/global_classes'

const GrayText = ({ children, ...props }: TextProps) => {
	const { classes } = useStyles()
	return (
		<Text className={classes.grayText} {...props}>
			{children}
		</Text>
	)
}

export default GrayText
