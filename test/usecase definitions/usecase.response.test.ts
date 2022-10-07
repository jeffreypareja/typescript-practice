// @ts-nocheck

import UsecaseResponse from 'core/definitions/usecase.response'

describe('usecase response', function() {
	it('should have correct instance based on response', function(){
		type ResponseType = Number
		let ResponseMessage = 2
		let response = new UsecaseResponse<ResponseType>(ResponseMessage)

		expect(response).toBeInstanceOf(UsecaseResponse)
		expect(response).toEqual(expect.objectContaining({
			data: expect.anything(Number), 
			status: expect.stringContaining('SUCCESS')
		}))
	})
})