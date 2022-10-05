
type DataStored = number;

export default class Stack {
	private limit: number; 
	private array: Array<DataStored>;

	constructor(limit= 10) {
		this.limit = limit	
		this.array = []
	}

	peek():DataStored {
		return this.array[this.array.length -1 ] 
	}

	push(number: DataStored) {
			this.array.push(number)
	}

	pop() {
		this.array.pop()
	}
}
