export default class PersonUseCaseError  extends Error {
	constructor(message: string){
		super()
		this.name = 'PersonUseCaseError'
		this.message = message 
	}
}