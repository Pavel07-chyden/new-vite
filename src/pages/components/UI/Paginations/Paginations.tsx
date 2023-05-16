import { Pagination } from '@mantine/core'

export const Paginations = () => {
	return (
		<Pagination
			total={3}
			size='sm'
			styles={{
				control: {
					'&[data-active]': {
						background: 'var(--Blue-Main-500)',
					},
					fontWeights: '400',
					fontSize: '16px',
					width: '16px',
					height: '32px',
					fontFamily: 'Roboto',
				},
			}}
		/>
	)
}
