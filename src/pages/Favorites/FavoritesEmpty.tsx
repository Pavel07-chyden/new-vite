import { FC } from 'react'
import {
	Container,
	Div,
	H1,
	ImgBig,
	Items,
	LinkJob,
} from './FavoritesEmpty.style'
import githubIcon from '/src/components/put/assets/frame.svg'

export const FavoritesEmpty: FC = () => {
	return (
		<Container>
			<Items>
				<Div>
					<ImgBig src={githubIcon} alt='frame' />
				</Div>
				<H1>Упс, здесь еще ничего нет!</H1>
				<Div>
					<LinkJob to='/jobPage'>Поиск Вакансий</LinkJob>
				</Div>
			</Items>
		</Container>
	)
}
