import styles from './Button.module.scss'
import cn from 'clsx'

const Button = ({
	children,
	clickHandler = null,
	type = 'common',
	...rest
}) => {
	return (
		<div className={styles.wrapper}>
			<button
				className={cn(styles.button, styles[type])}
				onClick={clickHandler}
				{...rest}
			>
				{children}
			</button>
		</div>
	)
}

export default Button
