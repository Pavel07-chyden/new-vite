import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { vacanciesApi } from '../../api/vacanscies.api'

export type StatusType = 'idle' | 'pending' | 'succeeded' | 'failed'
// export type VacanciesData = {
// 	[key: string]: string
// }
type TypeWork = {
	id: number
	title: string
}
type CityType = {
	id: number
	title: string
}

export type getVacanciesType = {
	id: number
	payment_from: number
	payment_to: number
	currency: string
	profession: string
	firm_name: string
	town: CityType
	type_of_work: TypeWork
}
export interface InitialStateType {
	status: StatusType
	data: {
		objects: getVacanciesType[]
		total: number
	}
}

export const getVacansyes = createAsyncThunk('users/getVacansyes', async () => {
	try {
		const data = await vacanciesApi.getVacanciesApi()
		console.log(data)
		return data
	} catch (e) {
		console.log(e)
	}
})

const initialState = {
	status: 'idle',
	data: {},
} as InitialStateType

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(getVacansyes.pending, state => {
			state.status = 'pending'
		})

		builder.addCase(getVacansyes.fulfilled, (state, lists) => {
			state.data = lists.payload
			state.status = 'succeeded'
		})
		builder.addCase(getVacansyes.rejected, state => {
			state.status = 'failed'
		})
	},
})

export const authDataReducer = authSlice.reducer
