import { createSlice } from '@reduxjs/toolkit'

//export const *** = createAsyncThunk('names-Data-input / ***', async () => {
//	const {data} = await name-Api.getNameData()
//	return data
//})

interface InitialStateType {
	info: string
}

const initialState = {
	info: '',
} as InitialStateType

const infoSlice = createSlice({
	name: 'data',
	initialState,
	reducers: {
		addInfo(state) {
			state.info = 'addTitle'
		},
	},
})

export default infoSlice.reducer
export const { addInfo } = infoSlice.actions

//switch (action.type)
//return { ...state, info: action.payload.info }
