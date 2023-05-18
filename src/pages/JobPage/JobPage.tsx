import { FC } from 'react'
import { Button } from '../../components/UI/Button/StyleButton'
import { Icon } from '../../components/UI/Icon/Icon'
import { InputSearch } from '../../components/UI/Input/InputSearch'
import { Paginations } from '../../components/UI/Paginations/Paginations'
import { DemoSelect } from '../../components/UI/Selects/DemoSelect'
import { ChoiceBefore } from '../../components/UI/Selects/SelectBefore'
import { ChoiceFrom } from '../../components/UI/Selects/SelectChoice'
import { VacancyItems } from '../../components/VacansiesItem/VacansiesItem'
import { getVacanciesType } from '../../store/slice/vacansyes'
import { useAppSelector } from '../../store/store'
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
	const lists = useAppSelector(state => state.lists.data.objects)
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
						<VacancyItems />

						<InputSearch />
					</InputHeader>

					{lists &&
						lists.map((o: getVacanciesType) => (
							<JobInfo key={o.id}>
								<InfoLink>
									<LinkTitle to=''>{o.profession}</LinkTitle>
									<Icon name='starFalse' />
								</InfoLink>
								<InfoItems>
									<InfoText>
										<Wages>{o.currency}</Wages>
										<Ul>
											<Li>{o.type_of_work.title}</Li>
										</Ul>
									</InfoText>
									<InfoMap>
										<Icon name='map' />
										<City>{o.town.title}</City>
									</InfoMap>
								</InfoItems>
							</JobInfo>
						))}
					<Pages>
						<Paginations />
					</Pages>
				</InnerContent>
			</Container>
		</Wrapper>
	)
}
