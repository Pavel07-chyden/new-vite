import { Input } from '@mantine/core'
import { IconSearch } from '@tabler/icons-react'
import { ButtonSearch } from '../Button/StyleButtonSearch'

export const InputSearch = () => {
	return (
		<Input
			icon={<IconSearch size='1rem' />}
			placeholder='Введите название вакансии'
			rightSection={<ButtonSearch name='Поиск' />}
			styles={{
				rightSection: {
					right: '36px',
				},
				input: {
					radius: '8px',
					width: '773px',
					height: '48px',
					padding: '0 12px 0 12px',
					fontSize: '14px',
					fontFamily: 'Inter',
				},
			}}
		/>
	)
}
