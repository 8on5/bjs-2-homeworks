// ЗАДАЧА 1. Форматтер чисел
function parseCount(parseValue) {
	if (Number.isNaN(Number.parseFloat(parseValue))) {
		throw new Error('Невалидное значение');
	} else {
		return Number.parseFloat(parseValue);
	}
}

function validateCount(parseValue) {
	try {
		return parseCount(parseValue);
	} catch (error) {
		return error;
	}
}

// ЗАДАЧА 2. Треугольник
class Triangle {
	constructor(sideA, sideB, sideC) {
		if (((sideA + sideB) < sideC) || ((sideA + sideC) < sideB) || ((sideB + sideC) < sideA)) {
			throw new Error('Треугольник с такими сторонами не существует');
		} else {
			this.sideA = sideA,
			this.sideB = sideB,
			this.sideC = sideC
		}
	}

    // Определение периметра треугольника
	get perimeter() {
		return this.sideA + this.sideB + this.sideC;
	}

    // Определение площади треугольника
	get area() {
		const p = this.perimeter / 2;
		return Math.round(Math.sqrt(p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC)) * 1000) / 1000;
	}
}

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);
	} catch {
		class NotTriangle {
			get perimeter() {
				return 'Ошибка! Треугольник не существует';
			}
			get area() {
				return 'Ошибка! Треугольник не существует';
			}
		}

		return new NotTriangle();
	}
}