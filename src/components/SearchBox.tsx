import React from 'react'
import { Select, SelectProps } from '@mantine/core'
import { source_sans } from 'src/styles/global_classes'
import { Search } from 'tabler-icons-react'
import { useFocusTrap, useFocusWithin } from '@mantine/hooks'

interface SearchBoxProps extends SelectProps {}

const SearchBox = ({ ...props }: SearchBoxProps) => {
	const { ref, focused } = useFocusWithin()
	return (
		<Select
			// ref={focusTrapRef}
			placeholder='Aradığınız ürün,kategori veya markayı yazınız.'
			rightSection={<Search color='#f28232' />}
			dropdownPosition='bottom'
			styles={{
				wrapper: { borderRadius: 6, border: 'none' },
				input: {
					height: 43,
					borderRadius: 6,
					border: 'none',
					background: '#f3f3f3',
					':focus': { border: '1px solid #f28232', borderBottomLeftRadius: 0, borderBottomRightRadius: 0 },
					'::placeholder': { ...source_sans.style },
				},
				dropdown: { border: '1px solid #f28232', marginTop: -10, borderTopLeftRadius: 0, borderTopRightRadius: 0 },
			}}
			{...props}
		/>
	)
}

export default SearchBox
