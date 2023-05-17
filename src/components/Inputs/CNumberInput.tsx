import { ActionIcon, Group, NumberInput, NumberInputProps, rem } from '@mantine/core'
import { Minus, Plus } from 'tabler-icons-react'

interface CNumberInputProps extends NumberInputProps {}

const CNumberInput = ({ ...props }: CNumberInputProps) => {
	return (
		<Group spacing={0}>
			<ActionIcon w={30} h={36} bg='#f0f0f0' variant='default' style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}>
				<Minus color='#f27a1a' size={21} />
			</ActionIcon>
			<NumberInput
				hideControls
				max={10}
				min={0}
				step={2}
				styles={{ input: { width: 42, height: 34, textAlign: 'center', borderRadius: 0, borderLeft: 0, borderRight: 0 } }}
				{...props}
			/>
			<ActionIcon w={30} h={36} bg='#f0f0f0' variant='default' style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}>
				<Plus color='#f27a1a' size={21} />
			</ActionIcon>
		</Group>
	)
}

export default CNumberInput
