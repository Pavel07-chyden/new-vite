import { IAuthFilters } from '../components/searchVacancies/searchVacancies.slice'
import { IAuthResponse } from '../types/types'
import { AuthType, instance } from './api'

export const authAPI = {
	getAccessToken() {
		return instance
			.get<AuthType>(
				'/oauth2/password/?login=sergei.stralenia@gmail.com&password=paralect123&client_id=2356&client_secret=v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948&hr=0'
			)
			.then(res => res.data)
	},
	getVacancies(
		params: { count: number; page: number | null } & Partial<IAuthFilters>
	) {
		return instance.get<IAuthResponse>('/vacancies/')
	},

	// одна вакансия по id : vacancies/:id/
	oneVacancyById: (id: string) => instance.get(`/vacancies/:${id}`),
	// Поиск по компаниям
	searchFor: () => instance.get('/clients/'),
	// Компания
	searchForId: (id: string) => instance.get(`/clients/:${id}`),
	//Список избранных вакансий
	listElected: () => instance.get('/favorites/'),
	// Избранные вакансии (пакетная обработка)
	putElected: () => instance.put('/favorites/'),
	deleteElected: () => instance.delete('/favorites/'),
	// Избранная вакансия (звезда)
	electedJob: (id: string) => `/favorites/:${id}`,
	// Каталог отраслей (фильтр select)
	cataloguesJob: () => '/catalogues/',
	// Категории по отрасли (фильтр select)
	cataloguesParentJob: (id: string) => `/catalogues/parent/:${id}/`,
}
