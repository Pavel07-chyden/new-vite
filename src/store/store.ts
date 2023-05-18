import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { searchVacanciesReducer } from '../components/searchVacancies/searchVacancies.slice'
import { authReducer } from './slice/auth'
import { authDataReducer } from './slice/getVacansyes'

const rootReducer = combineReducers({
	auth: authReducer,
	searchVacancies: searchVacanciesReducer,
	lists: authDataReducer,
})

const store = configureStore({
	reducer: rootReducer,
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export type AppRootStateType = ReturnType<typeof rootReducer>
export type RootState = ReturnType<typeof store.getState>

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store
