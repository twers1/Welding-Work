import Row from '@/ui/grid/Row'
import { FC } from 'react'

import styles from './Header.module.scss'
import HeaderButtons from './HeaderButtons/HeaderButton'
import HeaderLogo from './HeaderLogo/HeaderLogo'
import HeaderMenu from './menu/HeaderMenu'
import HeaderProfile from './profile/HeaderProfile'

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<Row >
			<HeaderLogo />
			<HeaderMenu />
			<HeaderButtons />
			<HeaderProfile />
			</Row>
		</header>
	)
}

export default Header
