import styles from '../PourInLog.module.scss'

const TableHeader = () => {
	return (
		<div className={styles.row}>
			<div>
				<span>Id</span>
			</div>
			<div>
				<span>Person</span>
			</div>
			<div>
				<span>Value</span>
			</div>
		</div>
	)
}

export default TableHeader
