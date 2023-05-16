import { createElement, MouseEventHandler } from 'react'
import allIcons from './allIcons'
import { IconName } from './types'

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
