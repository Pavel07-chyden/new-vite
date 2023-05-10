import { FC } from 'react'
import {
	ButtonLink,
	Container,
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
				<ImgBig src={githubIcon} alt='frame' />
				<H1>Упс, здесь еще ничего нет!</H1>
				<ButtonLink>
					<LinkJob to='/jobPage'>Поиск Вакансий</LinkJob>
				</ButtonLink>
			</Items>
		</Container>
	)
}
