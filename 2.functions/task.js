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
function summElementsWorker(...args) {
	return args.reduce((sum, index) => sum + index, 0);
}

function differenceMaxMinWorker(...args) {
	if (args.length === 0) {
		return 0;
	}
	return Math.max(...args) - Math.min(...args);
}

function differenceEvenOddWorker(...args) {
	let sumEvenElement = 0,
		sumOddElement = 0;

	if (args.length === 0) {
		return 0;
	}
	for (let i = 0; i < args.length; i += 1) {
		if (args[i] % 2 === 0) {
			sumEvenElement += args[i];
		} else {
			sumOddElement += args[i];
		}
	}
	return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...args) {
	let sumEvenElement = 0,
		countEvenElement = 0;

	if (args.length === 0) {
		return 0;
	}
	for (let i = 0; i < args.length; i += 1) {
		if (args[i] % 2 === 0) {
			sumEvenElement += args[i];
			countEvenElement += 1;
		}
	}
	return sumEvenElement / countEvenElement;
}

// Задача 3
function makeWork(arrArgs, func) {
	let maxWorkerResult = func(...arrArgs[0]);

	for (let i = 0; i < arrArgs.length; i += 1) {
		const funcResult = func(...arrArgs[i]);
		if (funcResult > maxWorkerResult) {
			maxWorkerResult = funcResult;
		}
	}
	return maxWorkerResult;
}