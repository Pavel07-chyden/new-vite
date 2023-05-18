import { instance } from './auth.api'
export const vacanciesApi = {
	getVacanciesApi() {
		return instance.get('/vacancies/', { params: {} }).then(res => res.data)
	},
}
