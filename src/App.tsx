import { FC } from 'react'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import s from './App.module.css'
import Header from './components/Header/Header'
import { UnionIcon } from './components/Icons/UnionIcon'
import { Favorites } from './pages/Favorites'
import { FavoritesEmpty } from './pages/FavoritesEmpty'
import { JobPage } from './pages/JobPage/JobPage'

const App: FC = () => {
	return (
		<BrowserRouter>
			<div className={s.header}>
				<div className={s.logo_svg}>
					<UnionIcon />
					Jobored
				</div>
				<ul className={s.header_menu}>
					<li className={s.header_item}>
						<NavLink className={s.active} to='/jobPage'>
							Поиск Вакансий
						</NavLink>
					</li>
					<li className={s.header_item}>
						<NavLink className={s.active} to='/favorites'>
							Избранные
						</NavLink>
					</li>
				</ul>
			</div>
			<div className={s.body}>
				<Routes>
					<Route path='/' element={<Header />} />
					<Route path='/jobPage' element={<JobPage />} />
					<Route path='/favorites' element={<Favorites />} />
					<Route path='/favorites-empty' element={<FavoritesEmpty />} />
				</Routes>
			</div>
		</BrowserRouter>
	)
}

export default App
