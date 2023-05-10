import { Input } from '@mantine/core'
import { IconSearch } from '@tabler/icons-react'
import { ButtonSearch } from '../Button/StyleButtonSearch'

export const InputSearch = () => {
	return (
		<Input
			icon={<IconSearch size='1rem' />}
			placeholder='Your twitter'
			rightSection={<ButtonSearch name='Поиск' />}
			styles={{
				rightSection: {
					right: '36px',
				},
				input: {
					radius: '8px',
					width: '773px',
					padding: '0 12px',
				},
			}}
		/>
	)
}
