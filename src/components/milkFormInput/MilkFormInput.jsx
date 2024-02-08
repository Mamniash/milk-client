import Button from '../../ui/button/Button'
import Field from '../../ui/field/Field'
import styles from './MilkFormInput.module.scss'
import { useMilkFormInput } from './hooks/useMilkFormInput'
import Alert from '../../ui/alert/Alert'

/* 

	это компонент обычной формы
	валидации формы занимается библиотека react hook form
	основная логика находится в хуке use MilkFormInput
	также при успехе и при ошибке выводится соответствующее поле

*/

const MilkFormInput = ({ addLog, error, success, setSuccess, setError }) => {
	const { handleSubmit, register, onSubmit, errors, setType } =
		useMilkFormInput(addLog, setError, setSuccess)
	return (
		<>
			<div className={styles.wrapperInnerPage}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						error={errors?.person?.message}
						name='person'
						register={register}
						options={{
							required: 'Person is required'
						}}
						type='text'
						placeholder='Enter person'
					/>
					<Field
						error={errors?.value?.message}
						name='value'
						register={register}
						options={{
							required: 'Value is required'
						}}
						type='number'
						min='1'
						max='300'
						placeholder='Enter value'
						style={{ marginTop: '15px' }}
					/>
					<div className={styles.wrapperButtons}>
						<Button clickHandler={() => setType('clean')}>Clean</Button>
						<Button clickHandler={() => setType('pourIn')} type='accent'>
							Pour in
						</Button>
					</div>
					{error && <Alert text={error.message} type='error' />}
					{success && <Alert text={success} />}
				</form>
			</div>
		</>
	)
}

export default MilkFormInput
