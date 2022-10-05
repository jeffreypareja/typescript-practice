let array = []

for (let a = 1; a <= 100; a++) {
	array.push(a)
}


let index = Math.floor(array.length / 2)
let overallIndex = index

let numToFind = 100

let status = {
	finished: false,
	value: null
}


let arrayBuffer = array 
let iteration = 0


while (status.finished === false) {
	let numAtIndex = arrayBuffer[index]
	console.log('finding')
	console.log(iteration++)

	if (numToFind > numAtIndex) {
		//change array
		arrayBuffer = arrayBuffer.slice(index, array.length)
		//recompute the index
		index = Math.ceil(arrayBuffer.length / 2)
		overallIndex = overallIndex + index
	}
	else if (numToFind < numAtIndex) {
		//change array
		arrayBuffer = arrayBuffer.slice(0, index)
		index = arrayBuffer.length / 2 < 1 ? 0 : Math.ceil(arrayBuffer.length/2)
		overallIndex = overallIndex - index
	}
	else if (numToFind === numAtIndex) {
		console.log('number found')
		status = {
			finish: true,
			value: overallIndex
		}
	}

}



console.log(array[status.value])
console.log(`iteration: ${iteration}`)
