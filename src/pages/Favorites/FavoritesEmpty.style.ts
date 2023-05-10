import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	justify-content: center;
	padding-top: 120px;
`
export const Items = styled.div`
	display: flex;
	flex-direction: column;
`

export const Div = styled.div`
	display: flex;
	justify-content: center;
	padding: 32px;
`
export const ImgBig = styled.img`
	max-width: 327px;
`
export const H1 = styled.h1`
	font-weight: 700;
	font-size: 24px;
	color: #343a40;
`
export const LinkJob = styled(NavLink)`
	font-weight: 600;
	font-size: 14px;
	color: var(--Blue-Main-500);
	text-decoration: none;
	padding: 10px 24px;
	background: var(--Blue-100);
	border: 0.5px solid var(--Blue-100);
	&:hover,
	&:focus {
		color: var(--Blue-400);
		cursor: pointer;
	}
	&:active {
		color: var(--Blue-Main-500);
	}
`
