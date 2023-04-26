// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react'

import HighlightedContents from '../components/HighlightedContents'
const meta: Meta<typeof HighlightedContents> = {
	title: 'Deneme Storisi',
	component: HighlightedContents,
}

export default meta

type Story = StoryObj<typeof HighlightedContents>

export const Primary: Story = {
	render: () => <HighlightedContents text='Story Deneme' src='' />,
}

export const Secondary: Story = {
	render: () => <HighlightedContents text='Story Deneme 2' src='' />,
}
