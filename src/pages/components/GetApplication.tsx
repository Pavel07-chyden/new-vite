import { useEffect, useState } from 'react'
import { jobAPI } from '../../api/axios-instance'

export const GetApplication = () => {
	const [state, setState] = useState([])
	useEffect(() => {
		jobAPI.getAccessToken().then(res => {
			setState(res.data)
		})
	}, [])

	return <div>{JSON.stringify(state)}</div>
}
