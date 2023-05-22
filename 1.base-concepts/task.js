"use strict";

function solveEquation(a, b, c) {
	let roots = [],
		discriminant;

	discriminant = Math.pow(b, 2) - (4 * a * c);
	if (discriminant < 0) {
		console.log(roots);

		return roots;
	} else if (discriminant === 0) {
		roots.push(-b / 2 * a);
		console.log(roots);

		return roots;
	} else {
		roots.push((-b + Math.sqrt(discriminant)) / (2 * a));
		roots.push((-b - Math.sqrt(discriminant)) / (2 * a));
		console.log(roots);

		return roots;
	}
}

solveEquation(1, 2, 1);

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let principalEach = 0;

	/* isString() - проверяет типы данных аргументов calculateTotalMortgage() и если они String, преобразовывает в Number */
	function isString(mortgageParam) {
		if (typeof(mortgageParam) === 'string' || typeof(mortgageParam) === 'number') {
			switch (Number.isFinite(parseFloat(mortgageParam))) {
				case true:
					return mortgageParam = parseFloat(mortgageParam);
					break;

				case false:
					return mortgageParam = false;
					break;
			}
		} else {
			return mortgageParam = false;
		}
	}

	/* Если значения аргументов с типом дынных String не удалось преобразовать к числу, 
  возвращает результат функции calculateTotalMortgage() false, иначе производит вычисления с аргументами типа Number */
	switch (false) {
		case isString(percent):
		case isString(contribution):
		case isString(amount):
		case isString(countMonths):
			console.log(principalEach = false);

			return principalEach;
		default:
			let monthlyPercentage = (isString(percent) / 100) / 12;
			let principalBalance = isString(amount) - isString(contribution);
			let monthlyPayment = principalBalance * (monthlyPercentage + (monthlyPercentage / (Math.pow((1 + monthlyPercentage), isString(countMonths)) - 1)));
			principalEach = parseFloat((monthlyPayment * isString(countMonths)).toFixed(2));
			console.log(principalEach);

			return principalEach;
	}
}

calculateTotalMortgage(10, 0, 50000, 12);
calculateTotalMortgage(10, 1000, 50000, 12);
calculateTotalMortgage(10, 0, 20000, 24);
calculateTotalMortgage(10, 1000, 20000, 24);
calculateTotalMortgage(10, 20000, 20000, 24);
calculateTotalMortgage(10, 0, 10000, 36);
calculateTotalMortgage(15, 0, 10000, 36);