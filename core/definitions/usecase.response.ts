export default class UseCaseResponse<ResponseType>{
	public status:string; 
	public data: ResponseType;
	
	constructor(response: ResponseType){
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