import request from 'supertest'
import app from '../api/index'


describe('Test api', function(){
	it('get /', function(){
		return request(app).get('/').expect(200).then(response => {
			expect(response.text).toEqual('Hello World')
		})
	})
})