import { jobAPI } from '../../api/axios-instance'
import { AppDispatchType } from '../store'

enum APP_ACTIONS_TYPES {
	SET_IS_AUTH = 'SET_IS_AUTH',
}

type AppActions = ReturnType<typeof setIsAuthAction>

interface InitialUsersType {
	isAuth: boolean
}

const initialState = {
	isAuth: false,
} as InitialUsersType

export const usersReducer = (
	state = initialState,
	action: AppActions
): InitialUsersType => {
	switch (action.type) {
		case APP_ACTIONS_TYPES.SET_IS_AUTH:
			return { ...state, isAuth: action.payload.status }

		default:
			return state
	}
}
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
	} catch (e: any) {
		console.log(e.response?.data?.message)
	}
}
