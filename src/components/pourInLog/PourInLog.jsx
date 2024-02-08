import styles from './PourInLog.module.scss'
import TableHeader from './table/TableHeader'
import TableRow from './table/TableRow'

/* 

это компонент самой таблицы состоящий 
из непосредственно заголовков и строк
на вход идут сами логи и они соответственно
отрисовываются в виде строки в таблице

*/

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
