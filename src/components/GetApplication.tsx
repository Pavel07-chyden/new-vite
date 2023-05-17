import { useEffect } from 'react'
import { authAPI } from '../api/auth.api'

export const GetApplication = () => {
	useEffect(() => {
		authAPI.getVacancies().then(data => {
			console.log(data, 'REZ.DATA')
		})
	}, [])

	return <div>{}</div>
}
