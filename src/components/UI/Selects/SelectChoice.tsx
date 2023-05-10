import { Select } from '@mantine/core'
import { useState } from 'react'

//Controlled search
export const ChoiceFrom = () => {
	const [searchValue, onSearchChange] = useState('')

	return (
		<Select
			placeholder='От'
			searchable
			color='green'
			marginBottom={'40px'}
			onSearchChange={onSearchChange}
			searchValue={searchValue}
			nothingFound='No options'
			data={[]}
			styles={{
				input: {
					marginBottom: '8px',
					borderRadius: '8px',
					padding: '8px 12px',
					height: '42px',
				},
			}}
		/>
	)
}
