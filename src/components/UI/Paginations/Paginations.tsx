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
				},
			}}
		/>
	)
}
