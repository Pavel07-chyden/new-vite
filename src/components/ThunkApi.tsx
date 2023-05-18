import { useEffect } from 'react'
import { checkAuth, getAccessTokenForApp } from '../store/slice/auth'
import { useAppDispatch } from '../store/store'

export const ThunkApi = () => {
	const dispatch = useAppDispatch()
	useEffect(() => {
		if (localStorage.getItem('token')) {
			dispatch(checkAuth())
		} else {
			dispatch(getAccessTokenForApp())
		}
	}, [])
	return <></>
}
