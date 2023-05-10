import { FC } from 'react'
import styled from 'styled-components'

export const StyleButton = styled.button`
	font-family: 'Inter', sans-serif;
	font-size: 14px;
	font-weight: 500;
	background: var(--Blue-Main-500);
	width: 275px;
	padding: 9.5px 98.5px;
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
	className?: string
}

export const Button: FC<Props> = ({ name, className }: Props) => {
	return <StyleButton className={className}>{name}</StyleButton>
}
