import styles from '../PourInLog.module.scss'

/* 

Здесь представлен компонент в виде заголовков для таблицы 
статистике кто сколько молока заливал в цистерны

*/

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
