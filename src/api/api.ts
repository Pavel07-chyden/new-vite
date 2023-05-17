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
	const ac_token = localStorage.getItem('access_token')
	config.headers.Authorization = `Bearer ${ac_token}`
	return config
})

instance.interceptors.response.use(
	config => {
		return config
	},
	async error => {
		const originalRequest = error.config
		if (
			error.response.status === 401 ||
			(error.response.status === 400 && error.config && !error.config._isRetry)
		) {
			originalRequest._isRetry = true
			try {
				const rf_token = localStorage.getItem('refresh_token')
				const res = await axios.get<AuthType>(
					`${API_URL}/refresh_token/?refresh_token=${rf_token}`,
					{ withCredentials: true }
				)

				localStorage.setItem('refresh_token', res.data.refresh_token)
				return instance.request(originalRequest)
			} catch (e) {
				console.log(e)
			}
		}
		throw error
	}
)
export type AuthType = {
	access_token: string
	refresh_token: string
	ttl: number
	token_type: string
	expires_in: number
}
