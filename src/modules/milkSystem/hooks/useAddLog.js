import { useState } from 'react'

/* 

этот хук отвечает за добавление логов
а также за добавлением в цистерны молока

также отсюда начинается прокидывание 
ошибки и успеха при соответствующей валидации

*/

export const useAddLog = ({ cisterns, setCisterns, setLogs }) => {
	const [lastId, setLastId] = useState(0)
	const [error, setError] = useState()
	const [success, setSuccess] = useState()

	const addLog = log => {
		log = { id: lastId, ...log }

		const minValue = cisterns.reduce(
			(min, item) => (item.value < min ? item.value : min),
			cisterns[0].value
		)

		if (minValue + Number(log.value) > 300) {
			setError(new Error("can't contain it"))
			return null
		}

		const idOfMin = cisterns.find(item => item.value == minValue).id
		setCisterns(prevState =>
			prevState.map(item =>
				item.id == idOfMin
					? { ...item, value: Number(log.value) + minValue }
					: item
			)
		)
		setLastId(prevState => prevState + 1)
		setLogs(prevLogs => [...prevLogs, log])
		setSuccess('Success')
	}

	return { addLog, error, success, setSuccess, setError }
}
