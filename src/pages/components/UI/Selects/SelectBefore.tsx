import { NumberInput, NumberInputHandlers } from '@mantine/core'
import { useRef, useState } from 'react'
import { Icon } from '../Icon/Icon'

export const ChoiceBefore = () => {
	const [value, setValue] = useState<number | ''>(0)
	const handlers = useRef<NumberInputHandlers>({} as NumberInputHandlers)
	return (
		<NumberInput
			rightSection={
				<div>
					<div onClick={() => handlers.current.increment()}>
						<Icon name='top'></Icon>
					</div>
					<div onClick={() => handlers.current.decrement()}>
						<Icon name='bottom'></Icon>
					</div>
				</div>
			}
			value={value}
			onChange={(val: number | '') => setValue(val)}
			handlersRef={handlers}
			placeholder='До'
			styles={{
				input: {
					marginBottom: '20px',
					padding: '8px 12px',
					borderRadius: '8px',
					height: '42px',
					fontSize: '14px',
					fontFamily: 'Inter',
					fontWeight: '400',
				},
				control: {
					border: 'none',
					background: 'none',
					color: 'var(--Grey-500)',
				},
				rightSection: {
					maxHeight: 'calc(100% - 0.125rem)',
				},
			}}
		/>
	)
}
