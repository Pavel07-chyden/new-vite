import { FC } from 'react'
import { useNavigate } from 'react-router-dom'


interface PropsType {
  id: number
  profession: string
  isCurrentVacancy: boolean
}

export const TitleVacancy: FC<PropsType> = ({ id, profession, isCurrentVacancy }) => {
  const navigate = useNavigate()

  const navigateToVacancy = () => {
    navigate(`${}${id}`)
  }

  return (
    <div
      onClick={navigateToVacancy}
      className={classNames(styles.title, {
        [styles.titleCurrent]: isCurrentVacancy,
        [styles.disabled]: isLoading
      })}
    >
      {profession}
    </div>
  )
}
