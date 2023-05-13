import { FC } from 'react'
import { Button } from '../../components/UI/Button/StyleButton'
import { Icon } from '../../components/UI/Icon/Icon'
import { InputSearch } from '../../components/UI/Input/InputSearch'
import { Paginations } from '../../components/UI/Paginations/Paginations'
import { DemoSelect } from '../../components/UI/Selects/DemoSelect'
import { ChoiceBefore } from '../../components/UI/Selects/SelectBefore'
import { ChoiceFrom } from '../../components/UI/Selects/SelectChoice'
import {
	City,
	Close,
	Container,
	ContainerFilter,
	GeneralLink,
	InfoItems,
	InfoLink,
	InfoMap,
	InfoText,
	InnerContent,
	InputHeader,
	JobInfo,
	Li,
	LinkTitle,
	Pages,
	ResetAll,
	TextLink,
	Titile,
	TitleOne,
	Ul,
	Wages,
	Wrapper,
} from './JobPage.style'

export const JobPage: FC = () => {
	return (
		<Wrapper>
			<Container>
				<ContainerFilter>
					<ResetAll>
						<TitleOne>Фильтры</TitleOne>
						<GeneralLink>
							<TextLink>Сбросить все</TextLink>
							<Close />
						</GeneralLink>
					</ResetAll>
					<Titile>Отрасль</Titile>
					<DemoSelect />
					<Titile>Оклад</Titile>
					<ChoiceFrom />
					<ChoiceBefore />
					<Button name='Применить' />
				</ContainerFilter>

				<InnerContent>
					<InputHeader>
						<InputSearch />
					</InputHeader>
					<JobInfo>
						<InfoLink>
							<LinkTitle to=''>Designer manager</LinkTitle>
							<Icon name='starFalse' />
						</InfoLink>
						<InfoItems>
							<InfoText>
								<Wages>з/п 7000 rub </Wages>
								<Ul>
									<Li>Полный рабочий день</Li>
								</Ul>
							</InfoText>
							<InfoMap>
								<Icon name='map' />
								<City>Moscow</City>
							</InfoMap>
						</InfoItems>
					</JobInfo>
					<Pages>
						<Paginations />
					</Pages>
				</InnerContent>
			</Container>
		</Wrapper>
	)
}
