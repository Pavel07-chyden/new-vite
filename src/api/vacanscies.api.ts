import { InitialShowType } from '../store/slice/vacansyes'
import { instance } from './auth.api'
export const vacanciesApi = {
	getVacanciesApi() {
		return instance
			.get<InitialShowType>('/vacancies/', { params: {} })
			.then(res => res.data)
	},
}
