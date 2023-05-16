import { jobAPI } from '../../api/axios-instance'
import { IUser } from '../../modules/IUser'
import { AppDispatchType } from '../store'

enum APP_ACTIONS_TYPES {
	SET_IS_AUTH = 'SET_IS_AUTH',
	SET_APP_USERS = 'SET_APP_USERS',
}

type AppActions =
	| ReturnType<typeof setUsersAction>
	| ReturnType<typeof setIsAuthAction>

interface InitialUsersType {
	users: IUser
	isAuth: boolean
}

const initialState = {
	users: {} as IUser,
	isAuth: false,
} as InitialUsersType

export const usersReducer = (
	state = initialState,
	action: AppActions
): InitialUsersType => {
	switch (action.type) {
		case APP_ACTIONS_TYPES.SET_APP_USERS:
			return { ...state, users: action.payload }

		case APP_ACTIONS_TYPES.SET_IS_AUTH:
			return { ...state, isAuth: action.payload.status }

		default:
			return state
	}
}

export const setUsersAction = (payload: IUser) =>
	({
		type: APP_ACTIONS_TYPES.SET_APP_USERS,
		payload: {} as IUser,
	} as const)

export const setIsAuthAction = (status: boolean) =>
	({
		type: APP_ACTIONS_TYPES.SET_IS_AUTH,
		payload: { status },
	} as const)

export const login = () => async (dispatch: AppDispatchType) => {
	try {
		const response = await jobAPI.getAccessToken()
		localStorage.setItem('token', response.data.access_token)
		dispatch(setIsAuthAction(true))
		dispatch(setUsersAction(response.data.users))
	} catch (e: any) {
		console.log(e.response?.data?.message)
	}
}

export const registration = () => async (dispatch: AppDispatchType) => {
	try {
		const response = await jobAPI.getAccessToken()
		localStorage.setItem('token', response.data.access_token)
		dispatch(setIsAuthAction(true))
		dispatch(setUsersAction(response.data.users))
	} catch (e: any) {
		console.log(e.response?.data?.message)
	}
}
