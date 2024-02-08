import { useState } from 'react'
import { useForm } from 'react-hook-form'

/* 

	в этом кастомном хуке присутствует представлена 
	логика для обработки форм в соответствующем компоненте
	используя hook use form мы получаем соответствующие хендлеры 
	и затем передаём их в компонент

*/

export const useMilkFormInput = (addLog, setError, setSuccess) => {
	const [type, setType] = useState('pourIn')

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm({
		mode: 'onChange'
	})

	const onSubmit = data => {
		setError()
		setSuccess()
		reset()

		if (type === 'clean') return null

		addLog(data)
	}

	return { handleSubmit, register, onSubmit, errors, setType }
}
