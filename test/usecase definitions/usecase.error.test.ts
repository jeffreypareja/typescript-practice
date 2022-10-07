// @ts-nocheck

import UsecaseError from 'core/definitions/usecase.error'

describe('usecase error', function(){
	it('should have correct instance based on message', function(){
		let message = 'message'
		let error = new UsecaseError(message)
		expect(error).toMatchObject({
			message: message
		})
		expect(error).toBeInstanceOf(UsecaseError)
	})
})