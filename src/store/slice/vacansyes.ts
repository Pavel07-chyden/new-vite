import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { vacanciesApi } from '../../api/vacanscies.api'
import { StatusType } from './auth'

type WorkType = {
	id: number
	title: string
}
type CityType = {
	id: number
	title: string
}

type VacancyType = {
	id: number
	payment_from: number
	payment_to: number
	currency: string
	profession: string
	firm_name: string
	town: CityType
	type_of_work: WorkType
}

export type VacanciesType = {
	objects: Array<VacancyType>
	total: number
}

type InitialStateType = {
	status: StatusType
	data: VacanciesType
}

export const getVacancies = createAsyncThunk('users/getVacancies', async () => {
	try {
		return await vacanciesApi.getVacanciesApi()
	} catch (e) {
		console.log(e)
	}
})

const initialState = {
	status: 'idle',
	data: {},
} as InitialStateType

const vacanciesSlice = createSlice({
	name: 'vacancies',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(getVacancies.pending, state => {
			state.status = 'pending'
			state.data = {} as VacanciesType
		})
		builder.addCase(getVacancies.fulfilled, (state, { payload }) => {
			state.status = 'succeeded'
			if (payload) {
				state.data = payload
			}
		})
		builder.addCase(getVacancies.rejected, state => {
			state.status = 'failed'
			state.data = {} as VacanciesType
		})
	},
})

export const vacanciesReducer = vacanciesSlice.reducer
