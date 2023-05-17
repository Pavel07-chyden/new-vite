import { FC } from 'react'
import { Icon } from '../../components/UI/Icon/Icon'
import { Container, H1, Items, LinkJob } from './FavoritesEmpty.style'

export const FavoritesEmpty: FC = () => {
	return (
		<Container>
			<Items>
				<Icon name='frame' />
				<H1>Упс, здесь еще ничего нет!</H1>
				<LinkJob to='/jobPage'>Поиск Вакансий</LinkJob>
			</Items>
		</Container>
	)
}
