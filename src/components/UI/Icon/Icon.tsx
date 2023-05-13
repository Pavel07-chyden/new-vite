import { createElement, MouseEventHandler } from 'react'
import styled from 'styled-components'
import allIcons from './allIcons'
import { IconName } from './types'

export const Icons = styled.div`
`
type Props = {
	name: IconName
	size?: number
	onClick?: MouseEventHandler<SVGElement>
}

export const Icon = ({ name, onClick }: Props) =>
	createElement(allIcons[name], {
		name,
		onClick,
	})
