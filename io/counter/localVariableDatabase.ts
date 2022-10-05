import Repository from '../../core/usecases/counter/ICounterRepository'
import CounterEntity from '../../core/entities/counter';

class LocalVariableDatabase extends Repository {
	private static instance: LocalVariableDatabase
	value = 0;

	public static getInstance(): LocalVariableDatabase {
		if(!LocalVariableDatabase.instance){
			LocalVariableDatabase.instance = new LocalVariableDatabase()
		}

		return this.instance
	}

	get(): CounterEntity{
		return {
			value: this.value
		}
	}

	update(newValue: CounterEntity): CounterEntity {
		this.value = newValue.value
		return newValue
	}
}


export default  LocalVariableDatabase