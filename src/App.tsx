import { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import {
	Body,
	H1,
	H3,
	Headers,
	ImgIcon,
	Item,
	LogoSvg,
	Menu,
	NavbarLink,
} from './App.style'
import Header from './components/Header/Header'
import githubIcon from './components/put/assets/union.svg'
import { FavoritesEmpty } from './pages/Favorites/FavoritesEmpty'
import { JobPage } from './pages/JobPage/JobPage'

const App: FC = () => {
	return (
		<BrowserRouter>
			<Headers>
				<LogoSvg>
					<ImgIcon src={githubIcon} alt='union' />
					<H1>Jobored</H1>
				</LogoSvg>
				<Menu>
					<Item>
						<NavbarLink to='/jobPage'>
							<H3>Поиск Вакансий</H3>
						</NavbarLink>
					</Item>
					<Item>
						<NavbarLink to='/favorites'>
							<H3>Избранные</H3>
						</NavbarLink>
					</Item>
				</Menu>
			</Headers>
			<Body>
				<Routes>
					<Route path='/' element={<Header />} />
					<Route path='/jobPage' element={<JobPage />} />
					<Route path='/favorites' element={<FavoritesEmpty />} />
					<Route path='/favorites-empty' element={<FavoritesEmpty />} />
				</Routes>
			</Body>
		</BrowserRouter>
	)
}

export default App
