import styles from './PourInLog.module.scss'
import TableHeader from './table/TableHeader'
import TableRow from './table/TableRow'

const PourInLog = ({ logs }) => {
	return (
		<div className={styles.wrapper}>
			<TableHeader />
			{logs.map(log => (
				<TableRow log={log} key={log.id} />
			))}
		</div>
	)
}

export default PourInLog
