import type { StorybookConfig } from '@storybook/nextjs'
import path from 'path'

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
	framework: {
		name: '@storybook/nextjs',
		options: {},
	},
	docs: {
		autodocs: 'tag',
	},
	typescript: {
		reactDocgen: false,
	},
	webpackFinal: async (config, { configType }) => {
		config.resolve!.modules = [...(config?.resolve?.modules || []), path.resolve('./')]

		return config
	},
}
export default config
