// @ts-nocheck

import localVariableDatabase from 'io/counter/localVariableDatabase'
import ICounterRepository from 'core/usecases/counter/ICounterRepository'
import CounterEntity from 'core/entities/counter'
describe('IO for Counter: Local Variable Database', function(){
	it('should have value of 0 when instantiated', function(){
		let db = localVariableDatabase.getInstance()
		let value = db.get()
		expect(db).toBeInstanceOf(ICounterRepository)
		expect(value).toMatchObject({
			value: 0
		})
	})


	it('should update value', function(){
		let db =localVariableDatabase.getInstance() 
		let newValue: CounterEntity = {
			value: 2
		}
		db.update(newValue) 
		let result  = db.get()
		expect(result).toMatchObject({
			value: 2
		})
	})
})