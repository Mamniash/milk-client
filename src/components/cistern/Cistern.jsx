import styles from './Cistern.module.scss'

const Cistern = ({ value }) => {
	return (
		<div className={styles.wrapper}>
			<img
				src={value > 0 ? '/images/full-cistern.png' : '/images/cistern.png'}
				height='100px'
				draggable={false}
			/>
			<span>{value}/300</span>
		</div>
	)
}

export default Cistern
