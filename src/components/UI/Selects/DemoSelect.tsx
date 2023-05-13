import { MantineTheme, Select } from '@mantine/core'
import { FC, useState } from 'react'
import { Icon } from '../Icon/Icon'

export const DemoSelect: FC = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	return (
		<div>
			<Select
				placeholder='Выбрать отрасль'
				rightSection={<Icon name='vectorbig' />}
				rightSectionWidth={30}
				onDropdownClose={() => setIsOpen(false)}
				onDropdownOpen={() => setIsOpen(true)}
				data={[
					'IT, интернет, связь, телеком',
					'Кадры, управление персоналом',
					'Искусство, культура, развлечения',
					'Банки, инвестиции, лизинг',
				]}
				styles={(theme: MantineTheme) => ({
					item: {
						'&[data-selected]': {
							'&, &:hover': {
								backgroundColor:
									theme.colorScheme === 'dark'
										? 'var(--black)'
										: 'var(--Blue-Main-500)',
								color:
									theme.colorScheme === 'dark'
										? 'var(--black)'
										: 'var(--white)',
							},
						},
						'&[data-hovered]': {
							backgroundColor:
								theme.colorScheme === 'dark'
									? 'var(--black)'
									: 'var(--Blue-100)',
							color:
								theme.colorScheme === 'dark' ? 'var(--white)' : 'var(--black)',
						},
					},
					input: {
						height: '42px',
						border: `1px solid ${
							isOpen ? 'var(--Blue-Main-500)' : 'var(--Grey-300)'
						}`,
						padding: '8px 12px',
						borderRadius: '8px',
						fontWeight: '400',
						fontSize: '14px',
						fontFamily: 'Inter',
						'::placholder': {
							color: 'var(--Grey-500)',
						},
					},
					rightSection: {
						stroke: `${isOpen ? 'var(--Blue-Main-500)' : 'var(--Grey-500)'}`,
						transition: 'all .3s ease-in',
						transform: `rotate(${isOpen ? '-180deg' : '0deg'})`,
						dropdown: {
							borderRadius: '8px',
							padding: '4px',
						},
						item: {
							fontWeight: '400',
							fontSize: '14px',
							padding: '8px',
							'option[selected]': {
								fontWeight: '500',
								color: 'var(--black)',
								fontSize: '14px',
								padding: '8px',
								background: 'var(--Blue-Main-500)',
								borderRadius: '8px',
							},
						},
					},
				})}
			/>
		</div>
	)
}
