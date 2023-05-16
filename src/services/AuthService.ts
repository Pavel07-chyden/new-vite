import { AxiosResponse } from 'axios'
import { instance } from '../api/axios-instance'
import { AuthResponse } from '../modules/response/AutheResponse'

export const authApi = {
	login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
		return instance.post<AuthResponse>('/oauth2/password/?login', {
			email,
			password,
		})
	},
	registration(
		email: string,
		password: string
	): Promise<AxiosResponse<AuthResponse>> {
		return instance.post<AuthResponse>('/oauth2/password/?registration', {
			email,
			password,
		})
	},
}
