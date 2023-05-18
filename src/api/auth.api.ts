import axios from 'axios'

export const API_URL = 'https://startup-summer-2023-proxy.onrender.com/2.0'

export const instance = axios.create({
	withCredentials: true,
	baseURL: API_URL,
	headers: {
		'x-secret-key': 'GEU4nvd3rej*jeh.eqp',
		'X-Api-App-Id':
			'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948',
	},
})

instance.interceptors.request.use(config => {
	config.headers.Authorization = `Bearer ${localStorage.getItem(
		'access_token'
	)}`
	return config
})

instance.interceptors.response.use(
	config => {
		return config
	},
	async error => {
		const originalRequest = error.config
		if (
			error.response.status === 410 &&
			error.config &&
			!error.config._isRetry
		) {
			originalRequest._isRetry = true
			try {
				const res = await instance.get<AuthResponse>('/oauth2/refresh_token/', {
					params: {
						refresh_token: localStorage.getItem('refresh_token'),
						client_id: 2356,
						client_secret:
							'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948',
					},
				})
				localStorage.setItem('access_token', res.data.access_token)
				localStorage.setItem('refresh_token', res.data.refresh_token)
				return instance.request(originalRequest)
			} catch (e) {
				console.log(e)
			}
		}
		throw error
	}
)

export const authAPI = {
	getAccessToken() {
		return instance
			.get<AuthResponse>('/oauth2/password/', {
				params: {
					login: 'sergei.stralenia@gmail.com',
					password: 'paralect123',
					client_id: 2356,
					client_secret:
						'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948',
					hr: 0,
				},
			})
			.then(res => res.data)
	},
}

export const favoritesAPI = {
	getAll() {
		return instance.get('/favorites/').then(res => res.data)
	},
}

export type AuthResponse = {
	access_token: string
	refresh_token: string
}
