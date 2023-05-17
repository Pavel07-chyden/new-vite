import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { API_URL, AuthType } from '../../api/api'
import { authAPI } from '../../api/auth.api'

export type StatusType = 'idle' | 'pending' | 'succeeded' | 'failed'

interface InitialStateType {
	status: StatusType
	tokens?: AuthType
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
		const res = await axios.get<AuthType>(
			`${API_URL}/refresh_token/?refresh_token=${localStorage.getItem(
				'refresh_token'
			)}`,
			{ withCredentials: true }
		)
		localStorage.setItem('access_token', res.data.access_token)
		localStorage.setItem('refresh_token', res.data.refresh_token)
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
