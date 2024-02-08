import styles from '../PourInLog.module.scss'

const TableRow = ({ log }) => {
	return (
		<div
			className={styles.row}
			key={`person + value ${log.person + log.value + log.id}`}
		>
			<div key={`id ${log.person + log.id}`}>
				<span>{log.id}</span>
			</div>
			<div key={`person ${log.person + log.id}`}>
				<span>{log.person}</span>
			</div>

			<div key={`value ${log.value + log.id}`}>
				<span>{log.value}</span>
			</div>
		</div>
	)
}

export default TableRow
