// Домашнее задание к лекции 2 «Функции»
// Задача 1
function getArrayParams(...args) {
	let min = 0,
		max = 0,
		avg = 0;

	min = Math.min(...args);
	max = Math.max(...args);
	avg = +(args.reduce((sum, index) => sum + index, 0) / args.length).toFixed(2);

	return {
		min: min,
		max: max,
		avg: avg
	};
}

// Задача 2
let result = 0;

function isSet(argsArr) {
	if (argsArr.length === 0) {
		return result = 0;
	}
}

function summElementsWorker(...args) {
	return result = args.reduce((sum, index) => sum + index, 0);
}

function differenceMaxMinWorker(...args) {
	(isSet(args) === 0) || (result = Math.max(...args) - Math.min(...args));
	return result;
}

function differenceEvenOddWorker(...args) {
	let sumEvenElement = 0,
		sumOddElement = 0;

	if (isSet(args) === 0) {
		return result;
	} else {
		for (let i = 0; i < args.length; i += 1) {
			if (args[i] % 2 === 0) {
				sumEvenElement += args[i];
			} else sumOddElement += args[i];
		}
		return result = sumEvenElement - sumOddElement;
	}
}

function averageEvenElementsWorker(...args) {
	let sumEvenElement = 0,
		countEvenElement = 0;

	if (isSet(args) === 0) {
		return result;
	} else {
		for (let i = 0; i < args.length; i += 1) {
			if (args[i] % 2 === 0) {
				sumEvenElement += args[i];
				countEvenElement += 1;
			}
		}
		return result = sumEvenElement / countEvenElement;
	}
}

// Задача 3
function makeWork(arrArgs, func) {
	const funcResult = [];

	for (let i = 0; i < arrArgs.length; i += 1) {
		switch (func) {
			case summElementsWorker:
				funcResult.push(summElementsWorker(...arrArgs[i]));
				break;
			case differenceMaxMinWorker:
				funcResult.push(differenceMaxMinWorker(...arrArgs[i]));
				break;
			case differenceEvenOddWorker:
				funcResult.push(differenceEvenOddWorker(...arrArgs[i]));
				break;
			case averageEvenElementsWorker:
				funcResult.push(averageEvenElementsWorker(...arrArgs[i]));
				break;
		}
	}

	let maxWorkerResult = funcResult[0];

	for (i = 0; i < funcResult.length; i += 1) {
		if (funcResult[i] > maxWorkerResult) {
			maxWorkerResult = funcResult[i];
		}
	}
	return maxWorkerResult;
}