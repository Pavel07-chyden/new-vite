import { FC } from 'react'
import { Button } from '../../components/UI/Button/StyleButton'
import { InputSearch } from '../../components/UI/Input/InputSearch'
import { Paginations } from '../../components/UI/Paginations/Paginations'
import { DemoSelect } from '../../components/UI/Selects/DemoSelect'
import {
	City,
	Close,
	Container,
	ContainerFilter,
	GeneralLink,
	ImgStar,
	InfoItems,
	InfoLink,
	InfoMap,
	InfoText,
	InnerContent,
	InputHeader,
	JobInfo,
	Li,
	LinkTitle,
	ListJob,
	Pages,
	ResetAll,
	TextLink,
	Titile,
	TitleOne,
	Ul,
	Wages,
	Wrapper,
} from '../../components/UI/Selects/DemoSelect.style'
import { ChoiceBefore } from '../../components/UI/Selects/SelectBefore'
import { ChoiceFrom } from '../../components/UI/Selects/SelectChoice'
import githubIconMap from '/src/components/put/assets/map.svg'
import githubIcon from '/src/components/put/assets/starFalse.svg'

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
					<ListJob>
						<JobInfo>
							<InfoLink>
								<LinkTitle to=''>Designer manager</LinkTitle>
								<ImgStar src={githubIcon} alt='starFalse' />
							</InfoLink>
							<InfoItems>
								<InfoText>
									<Wages>з/п 7000 rub </Wages>
									<Ul>
										<Li>Полный рабочий день</Li>
									</Ul>
								</InfoText>
								<InfoMap>
									<ImgStar src={githubIconMap} alt='map' />
									<City>Moscow</City>
								</InfoMap>
							</InfoItems>
						</JobInfo>
					</ListJob>
					<Pages>
						<Paginations />
					</Pages>
				</InnerContent>
			</Container>
		</Wrapper>
	)
}
