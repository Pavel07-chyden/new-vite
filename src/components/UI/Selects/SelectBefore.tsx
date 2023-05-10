import { Select } from '@mantine/core'
import { useState } from 'react'

//Controlled search
export const ChoiceBefore = () => {
	const [searchValue, onSearchChange] = useState('')

	return (
		<Select
			placeholder='До'
			searchable
			onSearchChange={onSearchChange}
			searchValue={searchValue}
			nothingFound='No options'
			data={[]}
			styles={{
				input: {
					marginBottom: '20px',
					padding: '8px 12px',
					borderRadius: '8px',
					height: '42px',
				},
			}}
		/>
	)
}
