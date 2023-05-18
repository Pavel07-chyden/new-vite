import { FC } from 'react'
import { getVacancies } from '../../store/slice/vacansyes'
import { useAppDispatch } from '../../store/store'

export const VacancyItems: FC = () => {
	const dispatch = useAppDispatch()
	return (
		<>
			<button
				onClick={() => {
					dispatch(getVacancies())
				}}
			>
				PandonmnayButton
			</button>
		</>
	)
}
