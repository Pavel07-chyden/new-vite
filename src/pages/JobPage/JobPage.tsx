import { FC } from 'react'
import s from './JobPage.module.css'

export const JobPage: FC = () => {
	return (
		<div className={s.wrapper}>
			<div className={s.items}>
				<div className={s.filter}>
					<div className={s.container_title}>
						<h2 className={s.filter_title}>Фильтры</h2>
						<button className={s.reset_all}>
							Сбросить все
							<>X</>
						</button>
					</div>
					<div className={s.container_choice}>
						<h3 className={s.industry_title}>Отрасль</h3>
						<input className={s.title} placeholder='Выбрать отрасль'></input>
					</div>
					<div className={s.container_salary}>
						<h3 className={s.industry_title}>Оклад</h3>
						<input className={s.from_input} placeholder='От'></input>
						<input className={s.before_input} placeholder='Да'></input>
					</div>
				</div>

				<div className={s.search}></div>
				<div className={s.list_job}></div>
			</div>
		</div>
	)
}
