import CounterEntity from '../../entities/counter'
import CounterRepository from './ICounterRepository'

export default class CounterUseCase {
	repository: CounterRepository

	constructor(repository: CounterRepository){
		this.repository = repository
	}

	getValue(): CounterEntity {
		try {
			return this.repository.get()	
		}catch(err){
			throw err
		}
	}
	increment(): CounterEntity {
		try {
			const previousValue = this.repository.get()
			console.log('previous value')
			console.log(previousValue)
			const newValue = {
				...previousValue, 
				value: previousValue.value + 1
			}

			const updatedValue = this.repository.update(newValue) 
			return updatedValue
		}catch(err){
			throw err
		}
	}

	decrement(): CounterEntity {
		try {
			const previousValue = this.repository.get()
			const newValue: CounterEntity  = {
				...previousValue,
				value: previousValue.value -1
			}

			const updatedValue = this.repository.update(newValue)
			return updatedValue
		}catch(err){
			throw err
		}
	}
}