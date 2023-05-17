import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { authAPI } from '../../api/auth.api'
import { IAutherResponse } from '../../types/iVacansies.types'
import { createAppAsyncThunk } from '../../util/create-async-thunk'

export interface IFiltersAndPagination {
	count: number
	filters: IAuthFilters
}
export interface IAuthFilters {
	published: number | null
	no_agreement: null | number
	page: number | null
	keyword: string | null
	payment_from: number | null
	payment_to: number | null
	catalogues: string | null
}

const initialState: IAutherResponse & IFiltersAndPagination = {
	objects: [],
	total: null,

	count: 4,
	filters: {
		published: 1,
		no_agreement: null,

		keyword: null,
		payment_from: null,
		payment_to: null,
		catalogues: null,
		page: null,
	},
}

export const getVacancies = createAppAsyncThunk<IAutherResponse, void>(
	'searchVacancies/getVacancies',
	async function (_, { rejectWithValue, getState }) {
		try {
			const { count } = getState().searchVacancies
			const {
				page,
				no_agreement,
				payment_to,
				payment_from,
				catalogues,
				keyword,
				published,
			} = getState().searchVacancies.filters
			const res = await authAPI.getVacancies({
				count,
				page,
				payment_from,
				payment_to,
				no_agreement,
				catalogues,
				keyword,
				published,
			})
			return res.data
		} catch (e) {
			return rejectWithValue(e)
		}
	}
)

export const searchVacanciesSlice = createSlice({
	name: 'searchVacancies',
	initialState,

	reducers: {
		setSearchQueryParams(state, action: PayloadAction<Partial<IAuthFilters>>) {
			state.filters = { ...state.filters, ...action.payload }
		},
		resetAllFilters(state) {
			state.filters.keyword = null
			state.filters.payment_from = null
			state.filters.payment_to = null
			state.filters.catalogues = null
			state.filters.page = 0
		},
		setTotal(state, action: PayloadAction<number | null>) {
			state.total = action.payload
		},
	},
	extraReducers: builder => {
		builder.addCase(getVacancies.fulfilled, (state, action) => {
			state.objects = action.payload.objects
			state.total = action.payload.total
		})
	},
})

export const { setSearchQueryParams, resetAllFilters, setTotal } =
	searchVacanciesSlice.actions
export const searchVacanciesReducer = searchVacanciesSlice.reducer
