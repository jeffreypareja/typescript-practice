import { timeStamp } from "console";

type NodeType = TreeNode | null | undefined
class TreeNode {
	private left: NodeType; 
	private right: NodeType;
	private value:number;

	constructor(value:number){
		this.value = value
		this.left = null
		this.right = null 
	}


	setValue(value: number) {
		console.log('setting value')
		this.value = value 
	}

	getLeft(){
		return this.left
	}

	setLeft(node: number) {
		if(node === null)
			return this.left = null

		this.left = new TreeNode(node)
	}

	getRight(){
		return this.right
	}

	setRight(node: number) {
		if(node === null)
			return this.right = null

		this.right = new TreeNode(node)
	}

	getValue() {
		return this.value
	}


	getChildren(){
		const children: TreeNode[] = []

		if(this.left !== null && typeof this.left !== 'undefined') 
			children.push(this.left)

		if(this.right !== null && typeof this.right !== 'undefined')	
			children.push(this.right)

		return children
	}

	isLeaf() {
		return !(this.left !== null || this.right !== null) 
	}
}


class BinaryTree {
	private root:TreeNode | null
	private preOrderTraversalStack:Array<any> = [] 
	private inOrderTraversalStack:Array<any> = []
	private postOrderTraversalStack: Array<any> = []


	constructor() {
		this.root = null
	}


	getRootNode(): NodeType{
		return this.root
	}

	addRootNode(value: any){
		this.root = new TreeNode(value)
	}

	addChild(node: any, tree: any) {
		//base case , greater than
		if(node > tree.getValue()){
			//if the right is null, set it already, else recursive again
			if(tree.getRight() === null) {
				tree.setRight(node)
			}else {
				this.addChild(node, tree.getRight())	
			}
		}
		else if(node < tree.getValue()) {
			//if the left is null, set it already ,else recursive again
			if(tree.getLeft() === null) {
				tree.setLeft(node)
			}else {
				this.addChild(node, tree.getLeft())
			}
		}
	}


	insert(node:any){
		if(this.root === null) {
		 this.addRootNode(node)
		}else {
			this.addChild(node, this.root)
		}
	}

	//changes are pending here
	removeChild(node: any, tree: any) {
		console.log('removign child')
		//if greater than, recursive again

		if(tree){

			//if equal to the node, get the right adn set as the head, make the right null
			if(node === tree.getValue()){
				//delete if there is no children
				if(tree.getChildren().length === 0){
					tree.setValue(null)
				}//get the rigthmost children and set it as value while setting right as null 
				else {
					tree.setValue(tree.getRight())
					tree.setRight(null)
				}
			}//not matched, and no children
			else if(tree.getChildren().length === 0){
				console.log('not found')
			}
			else if(node > tree.getValue()){
				console.log('getting right' )
				this.removeChild(node, tree.getRight())
			} 
			else if(node < tree.getValue()){
				console.log('getting lefft')
				this.removeChild(node, tree.getLeft())
			} 
		}
		else {
			console.log('not found')
		}





	}


	remove(node: any) {
		if(node === null)
			return null
		else 
			this.removeChild(node, this.root)
	}

	//gets the insert history
	preOrderTraversal(tree: any){

		if(tree.getValue())
			this.preOrderTraversalStack.push(tree.getValue())

		if(tree.getLeft()) {
			this.preOrderTraversal(tree.getLeft())
		}

		if(tree.getRight()) {
			this.preOrderTraversal(tree.getRight())
		}
	}

	//traverses from the bottom to the top
	postOrderTraversal(tree:NodeType) {
		if(tree?.getLeft()){
			this.postOrderTraversal(tree.getLeft())
		}

		if(tree?.getRight()) {
			this.postOrderTraversal(tree.getRight())
		}

		this.postOrderTraversalStack.push(tree?.getValue())
	}



	//get the elements in order
	inOrderTraversal(tree:NodeType) {
		//get the left subtree
		//push the root
		//get the right subtree

		if(tree?.getLeft() !== null) {
			this.inOrderTraversal(tree?.getLeft())
		}
		
		this.inOrderTraversalStack.push(tree?.getValue())

		if(tree?.getRight() !== null) {
			this.inOrderTraversal(tree?.getRight())
		}
	}


	getPreOrderTraversalStack(){
		return this.preOrderTraversalStack
	}

	traversePreOrder(){
		this.preOrderTraversal(this.root)
	}

	traverseInOrder(){
		this.inOrderTraversal(this.root)
	}


	traversePostOrder(){
		this.postOrderTraversal(this.root)
	}
	


}

const tree = new BinaryTree()
const anotherTree = new BinaryTree()

tree.insert(3)
tree.insert(1)
tree.insert(2)
tree.insert(6)
tree.insert(5)
tree.insert(4)

tree.traverseInOrder()
tree.traversePreOrder()
tree.traversePostOrder()


anotherTree.insert(1)
anotherTree.insert(2)
anotherTree.insert(3)
anotherTree.insert(4)
anotherTree.insert(5)
anotherTree.insert(6)
anotherTree.traverseInOrder()
anotherTree.traversePreOrder()
anotherTree.traversePostOrder()



//we can check for similarities thru the traversal stacks 



