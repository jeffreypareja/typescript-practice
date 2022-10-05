class TreeNode {
	private value:string;
	public children: Array<TreeNode> = []

	constructor(value: string){
		this.value = value
	}

	getChildren(): Array<TreeNode>{
		return this.children
	}

	addChild(value: string) {
		const child = new TreeNode(value)
		this.children.push(child)
		return child 
	}

	removeChild(value: string) {
		const childSearched = this.children.findIndex(node => node.getValue() === value)
		if(childSearched > -1){
			//remove here
			this.children = [...this.children.slice(0, childSearched), ...this.children.slice(childSearched +1)]
		}
	}

	findChild(value: string) {
		return this.children.find(node => node.getValue() === value)
	} 

	getValue(): string {
		return this.value	
	}
	
}



class Trie {
	public root:TreeNode
	constructor() {
		this.root = new TreeNode('')
	}

	insert(value: string){
		//get the first char
		this.addChild(value, this.root)
	}

	find(value: string) {
		return this.findChild(value, this.root)
	}

	private findChild(value: string, tree: TreeNode | undefined) {
		//if there is no value found stop the loop now
		//if children matched, push to the return value, get the child matched and assigned as the tree to inspect
		let firstCharacter = value[0]
		let theRestOfString = value.slice(1)
		let treeToInspect = tree

		let result = "" 

		while(treeToInspect?.findChild(firstCharacter)) {
			treeToInspect = treeToInspect.findChild(firstCharacter)
			result = result + firstCharacter
			firstCharacter = theRestOfString[0]
			theRestOfString = theRestOfString.slice(1)
		}

		return result
	}



	private addChild(value: string, tree: TreeNode | undefined){
		if(value.length == 0 )
			return 
		
		const firstCharacter = value[0]
		const theRestOfString = value.slice(1)

		if(tree?.findChild(firstCharacter)){
			const child = tree.findChild(firstCharacter)
			this.addChild(theRestOfString, child)
		}else {
			const newChild = tree?.addChild(firstCharacter)
			this.addChild(theRestOfString, newChild)
		}
	}

}


const node =  new Trie()
node.insert('test')
node.insert('true')
node.insert('truelaloo')

console.log(node.find('truelaloo'))
