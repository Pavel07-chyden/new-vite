import { Select } from '@mantine/core'
import { IconChevronDown } from '@tabler/icons-react'

export const DemoSelect = () => {
	return (
		<Select
			placeholder='Выбрать отрасль'
			rightSection={<IconChevronDown size='1rem' />}
			rightSectionWidth={84}
			styles={{
				rightSection: {
					pointerEvents: 'none',
					maxWidth: '15px',
					marginRight: '8px',
				},
				input: {
					paddingRight: '0.1rem',
					padding: '8px 12px',
					borderRadius: '8px',
					height: '42px',
				},
				wrapper: {
					color: 'var(--Grey-500)',
				},
			}}
			data={[
				' IT, интернет, связь, телеком',
				'Кадры, управление персоналом',
				'Искусство, культура, развлечения',
				'Банки, инвестиции, лизинг',
			]}
		/>
	)
}
