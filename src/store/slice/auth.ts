import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { favoritesAPI, instance } from '../../api/auth.api'
import { authAPI, AuthResponse } from '../../api/instance'

export type StatusType = 'idle' | 'pending' | 'succeeded' | 'failed'

interface InitialStateType {
	status: StatusType
	data: any
	tokens?: AuthResponse
	isAuth: boolean
}

export const getAccessTokenForApp = createAsyncThunk(
	'users/getAccessTokenForApp',
	async () => {
		try {
			const data = await authAPI.getAccessToken()
			localStorage.setItem('access_token', data.access_token)
			localStorage.setItem('refresh_token', data.refresh_token)
		} catch (e) {
			console.log(e)
		}
	}
)

export const checkAuth = createAsyncThunk('users/checkAuth', async () => {
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
	} catch (e) {
		console.log(e)
	}
})

export const getAllVac = createAsyncThunk('users/checkAuth', async () => {
	try {
		const data = await favoritesAPI.getAll()
		console.log(data)
	} catch (e) {
		console.log(e)
	}
})

const initialState = {
	status: 'idle',
	isAuth: false,
	tokens: {},
} as InitialStateType

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(getAccessTokenForApp.pending, state => {
			state.status = 'pending'
		})
		builder.addCase(getAccessTokenForApp.fulfilled, state => {
			state.status = 'succeeded'
			state.isAuth = true
		})
		builder.addCase(getAccessTokenForApp.rejected, state => {
			state.status = 'failed'
			state.isAuth = false
		})
		builder.addCase(checkAuth.pending, state => {
			state.status = 'pending'
		})
		builder.addCase(checkAuth.fulfilled, state => {
			state.status = 'succeeded'
			state.isAuth = true
		})
		builder.addCase(checkAuth.rejected, state => {
			state.status = 'failed'
			state.isAuth = false
		})
	},
})

export const authReducer = authSlice.reducer
