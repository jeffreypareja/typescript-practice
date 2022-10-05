export default class UseCaseResponse{
	public status:string; 
	public data: object;
	
	constructor(response: object){
		this.status = 'SUCCESS'	
		this.data = response
	}	

	getStatus() {
		return this.status
	}

	getResponse(){
		return this.data
	}
}