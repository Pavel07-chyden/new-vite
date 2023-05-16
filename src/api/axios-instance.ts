import axios, { AxiosInstance } from 'axios'

export const instance: AxiosInstance = axios.create({
	baseURL: 'https://startup-summer-2023-proxy.onrender.com/2.0',
	headers: {
		'x-secret-key': 'GEU4nvd3rej*jeh.eqp',
	},
})
instance.interceptors.request.use(config => {
	config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
	return config
})

export const jobAPI = {
	getAccessToken: () =>
		instance.get(
			'/oauth2/password/?login=sergei.stralenia@gmail.com&password=paralect123&client_id=2356&client_secret=v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948&hr=0'
		),
	searchJob: () => instance.get('/vacancies/'),
	// одна вакансия по id : vacancies/:id/
	oneVacancyById: (id: string) => instance.get(`/vacancies/:${id}`),
	// Поиск по компаниям
	searchFor: () => instance.get('/clients/'),
	// Компания
	searchForId: (id: string) => instance.get(`/clients/:${id}`),
	// DELETE - снять блокировку
	unlock: () => (id: string) => instance.delete(`/clients/${id}/block/`),
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
