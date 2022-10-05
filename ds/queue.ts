type QueueDataStored = number;

class Queue {
	private array: Array<QueueDataStored>;
	private limit: number;

	constructor(){
		this.array = []
		this.limit = 2
	}


	enqueue(data: QueueDataStored) {
		if(this.array.length < this.limit)
		this.array = [data, ...this.array]
		else 
		throw new Error('No available space to enqueue new things')
	}

	dequeue(): QueueDataStored {

		if(this.array.length > 0) {
		const end = this.array[this.array.length -1]
		this.array.pop()

		return end}
		else 
		throw new Error('There are no objects in queue to dequeue.')
	}

	peek(): QueueDataStored{
		return this.array[this.array.length-1]
	}

	isFull():boolean {
		return this.array.length === this.limit
	}

	isEmpty(): boolean {
		return this.array.length === 0
	}
}



const queue = new Queue()


queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
console.log(queue)