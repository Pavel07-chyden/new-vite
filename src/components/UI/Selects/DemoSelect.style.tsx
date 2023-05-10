import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Wrapper = styled.div`
	max-width: 1440px;
	margin: 0 auto;
`
export const Container = styled.div`
	display: flex;
`
export const ContainerFilter = styled.div`
	padding: 20px;
	max-width: 315px;
	height: 360px;
	border-radius: 12px;
	border: 1px solid var(--Grey-200);
	background-color: var(--white);
`
export const TitleOne = styled.h2`
	font-weight: 700;
	font-size: 20px;
	color: var(--black);
`
export const Titile = styled.h3`
	font-weight: 700;
	font-size: 16px;
	text-align: start;
	color: var(--black);
	padding: 20px 0 8px 0;
`
export const ResetAll = styled.div`
	display: flex;
	justify-content: space-between;
	font-family: 'Inter', sans-serif;
	border: none;
	align-item: center;
	font-weight: 500;
	background-color: white;
	font-size: 14px;
	padding-bottom: 12px;
`
export const GeneralLink = styled.a`
	display: inline-block;
	font-weight: 500;
	font-size: 14px;
	padding: 4px 14px 0 0;
	color: var(--Grey-500);
	&:hover,
	&:focus {
		color: var(--Blue-400);
		cursor: pointer;
		& > div {
			&:after,
			&:before {
				background: var(--Blue-400);
				cursor: pointer;
			}
		}
	}
	&:active {
		color: var(--Blue-Main-500);
	}
`
export const TextLink = styled.div`
	font-weight: 500;
	font-size: 14px;
`

export const Close = styled.div`
	position: relative;
	&:after,
	&:before {
		position: absolute;
		top: -12px;
		right: -7px;
		content: '';
		width: 1px;
		height: 9px;
		background: var(--Grey-500);
	}
	&:after {
		transform: rotate(42deg);
	}
	&:before {
		transform: rotate(-42deg);
	}
	&:active {
		background: var(--Blue-Main-500);
	}
`
export const InnerContent = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 773px;
	width: 100%;
	margin-left: 28px;
`
export const InputHeader = styled.div`
	margin-bottom: 16px;
`
export const ListJob = styled.div`
	margin-bottom: 16px;
`
export const JobInfo = styled.div`
	display: block;
	padding: 25px;
	border-radius: 12px;
	border: 1px solid var(--Grey-200);
	background-color: var(--white);
`
export const InfoLink = styled.div`
	display: flex;
	justify-content: space-between;
`

export const InfoItems = styled.div`
	font-weight: 400;
	font-size: 16px;
`
export const Wages = styled.p`
	font-weight: 600;
	font-size: 16px;
`
export const Ul = styled.ul`
	padding-left: 12px;
`
export const Li = styled.li`
	padding-right: 12px;
	font-weight: 400;
	font-size: 16px;
`
export const InfoText = styled.div`
	display: flex;
	align-item: center;
	gap: 12px;
	padding: 16px 0 16px;
`
export const InfoMap = styled.div`
	display: flex;
	align-item: center;
	gap: 11px;
`
export const City = styled.p`
	font-weight: 400;
	font-size: 16px;
`
export const ImgStar = styled.img``

export const LinkTitle = styled(NavLink)`
	font-weight: 600;
	font-size: 20px;
	color: var(--Blue-Main-500);
	font-family: 'Inter', sans-serif;
	text-decoration: none;
	&:hover,
	&:focus {
		color: var(--Blue-400);
		cursor: pointer;
	}
	&:active {
		color: var(--Blue-Main-500);
	}
`

export const Pages = styled.div`
	display: flex;
	margin-top: 40px;
	justify-content: center;
`
