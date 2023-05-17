import { FC, memo } from 'react'
import { IVacancy } from '../../types/iVacansies.types'

interface PropsType {
	vacancy: IVacancy
	isCurrentVacancy?: boolean
}

export const VacancyItems: FC<PropsType> = memo(
	({ vacancy, isCurrentVacancy }) => {
		const { id, profession, firm_name, ...restProps } = vacancy

		return <></>
	}
)
