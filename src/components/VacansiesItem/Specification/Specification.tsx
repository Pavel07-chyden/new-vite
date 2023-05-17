import { FC } from 'react'

interface PropsType {
	isCurrentVacancy: boolean
	payment_from: number
	payment_to: number
	currency: string
	type_of_work?: { title: string }
	town: { title: string }
}

export const Specification: FC<PropsType> = () => {
	return <></>
}
