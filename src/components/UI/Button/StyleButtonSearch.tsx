import { FC } from 'react'
import styled from 'styled-components'

export const StyleButtonSearch = styled.button`
	font-family: 'Inter', sans-serif;
	font-size: 14px;
	font-weight: 400;
	background: var(--Blue-Main-500);
	width: 83px;
	padding: 5.5px 20px;
	text-decoration: none;
	color: var(--white);
	border-radius: 8px;
	border: none;
	display: flex;
	align-item: center;
	&:hover,
	&:focus {
		background: var(--Blue-400);
		cursor: pointer;
	}
	&:active {
		background: var(--Blue-600);
	}
`
type Props = {
	name: string
}

export const ButtonSearch: FC<Props> = ({ name }: Props) => {
	return <StyleButtonSearch>{name}</StyleButtonSearch>
}
