import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Headers = styled.div`
	display: flex;
	align-items: center;
	padding: 24px 158px;
	background: var(--white);
`

export const LogoSvg = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
	font-weight: 900;
`
export const H1 = styled.h1`
	font-weight: 600;
	font-size: 24px;
	font-family: 'Poppins', sans-serif;
`

export const Menu = styled.ul`
	display: flex;
	width: 100%;
	justify-content: center;
`

export const Item = styled.li`
	list-style-type: none;
	&:first-child {
		margin-right: 60px;
	}
`

export const NavbarLink = styled(NavLink)`
	color: var(--black);
	font-family: 'Inter', sans-serif;
	text-decoration: none;
	&:hover,
	&:focus {
		color: var(--Blue-Main-500);
		cursor: pointer;
		font-weight: 500;
	}
`

export const H3 = styled.h3`
	font-weight: 400;
	font-size: 16px;
`

export const Body = styled.div`
	background-color: var(--Grey-100);
`
