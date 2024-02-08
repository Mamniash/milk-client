import { IoMdArrowBack } from 'react-icons/io'

import { useLocation, useNavigate } from 'react-router-dom'
import styles from './Header.module.scss'

/* 

этот компонент header является частью layout
и занимается тем что перенаправляет пользователей
на домашнюю страницу в случае ошибочного роутеринга

*/

const Header = ({ backLink = '/' }) => {
	const { pathname } = useLocation()
	const navigate = useNavigate()

	return (
		<header className={styles.header}>
			<>
				{pathname != '/' && (
					<button
						aria-label='Go back'
						onClick={() => {
							navigate(backLink)
						}}
					>
						<IoMdArrowBack fill='#fff' fontSize={35} />
					</button>
				)}
			</>
		</header>
	)
}

export default Header
