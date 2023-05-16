import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { combineReducers } from 'redux'
import thunk from 'redux-thunk'
import appReducer from './reducers/app-reducer'
import { usersReducer } from './reducers/users-reducer'

const rootReducer = combineReducers({
	app: appReducer,
	users: usersReducer,
})

export type RootReducerType = typeof rootReducer

export const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunk),
})
export type AppRootStateType = ReturnType<RootReducerType>

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
window.store = store

export type AppDispatchType = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatchType>()
