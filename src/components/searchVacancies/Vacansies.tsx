import { RootState, useAppDispatch, useAppSelector } from '../../store/store'

export const Vacancies = () => {
	const dispatch = useAppDispatch()
	const vacancies = useAppSelector(
		(state: RootState) => state.searchVacancies.objects
	)

	return (
		<>
			{vacancies?.map(vacancy => {
				return <div />
			})}
		</>
	)
}
