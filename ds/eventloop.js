

/*let sum = 0
let input = 10
callbackWhenLoopIsDone = (avg) => {
	console.log('average is ' + avg)
}

function recursiveFunctionToBeScheduledEveryTick(num, callbackWhenLoopIsDone) {
	console.log('this is tick')
	sum += num

	if (num === input) {
		///done na 
		callbackWhenLoopIsDone(sum)
		return
	}

	setImmediate(recursiveFunctionToBeScheduledEveryTick.bind(null, num + 1, callbackWhenLoopIsDone))
}




recursiveFunctionToBeScheduledEveryTick(1, callbackWhenLoopIsDone)
*/

//loop using event loop set immediate 

let limit = 10

function recurringTaskEveryTick(number){
	console.log('this is tick')
	if(number === limit)
		return console.log('we are done na')

	setImmediate(recurringTaskEveryTick.bind(null, number + 1))
}

recurringTaskEveryTick(1)