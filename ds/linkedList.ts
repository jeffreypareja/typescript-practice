class LinkedListNode {
	value: number; 
	private next: LinkedListNode | null;

	constructor(value: number, next: LinkedListNode | null) {
		this.value = value
		this.next = next
	}

	setNext(next: LinkedListNode | null) {
		this.next = next
	}

	getNext(): LinkedListNode | null {
		return this.next	
	}
}


class LinkedList {
	head: LinkedListNode
	size = 1
	constructor(head: LinkedListNode) {
		this.head = head
	} 

	getAtIndex(index: number) : LinkedListNode | null {
		let node:LinkedListNode | null  | undefined = this.head

		if(index > this.size) {
			throw new Error('Size exceeded')
		}

		for(let a  = 0; a < index-1; a++ ){
			node = node?.getNext()	
		}

		return node
	}

}

const node = new LinkedListNode(1, null)
const list =  new LinkedList(node)

