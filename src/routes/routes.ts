import { FC } from 'react'
import { Home } from '../pages/Home'

export enum PATH {
	HOME = '/',
}

type Routes = {
	path: string
	component: FC
	exact?: boolean
}

export const publicRoutes: Routes[] = [
	{ path: PATH.HOME, component: Home, exact: true },
]
