import { RootState } from '../../store/store'

export const selectVacancies = (state: RootState) =>
	state.searchVacancies.objects
