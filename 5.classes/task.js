// Домашнее задание к лекции 5 «Классы»
// ЗАДАЧА 1. Печатное издание
class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}

	// Улучшение состояния книги
	fix() {
		this.state += this.state / 2;
	}

	// Изменение состояния книги
	set state(stateValue) {
		if (stateValue < 0) {
			this._state = 0;
		} else if (stateValue > 100) {
			this._state = 100;
		} else {
			this._state = stateValue;
		}
	}

	// Получение информации о состоянии книги
	get state() {
		return this._state;
	}
}

// Классы типов печатных изданий
class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = 'magazine';
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = 'book';
	}
}

// Классы жанров произведений
class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = 'novel';
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = 'fantastic';
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = 'detective';
	}
}

// ЗАДАЧА 2. Библиотека
class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}

	// Добавление книги в хранилище
	addBook(book) {
		(book.state > 30) ? this.books.push(book): console.log('Книгу нельзя добавить в хранилище.');
	}

	// Поиск книги в хранилище
	findBookBy(type, value) {
		return this.books.find((book) => book[type] === value) || null;
	}

	// Выдача книги
	giveBookByName(bookName) {
		const findResult = this.findBookBy('name', bookName);
		if (!findResult) return null;
		this.books = this.books.filter((book) => book.name !== bookName);
		return findResult;
	}
}

// ЗАДАЧА 3. Журнал успеваемости.
class Student {
	constructor(name) {
		this.name = name;
		this.marks = {};
	}

	get marks() {
		return this._marks;
	}

	set marks(studentMark) {
		this._marks = studentMark;
	}

	// Добавление оценки по предмету
	addMark(mark, subject) {
		const studentMark = this.marks;

		if (mark < 2 || mark > 5) return;
		(subject in studentMark) ? studentMark[subject].push(mark): studentMark[subject] = [mark];
	}

	// Средняя оценка по одному предмету
	getAverageBySubject(subject) {
		if (!(subject in this.marks)) return 0;
		const marksSumBySubject = this.marks[subject].reduce((sum, mark) => sum + mark);

		return marksSumBySubject / this.marks[subject].length;
	}

	// Средняя оценка по всем предметам
	getAverage() {
		const subjects = Object.keys(this.marks);
		const avgMarksBySubjects = [];

		subjects.forEach((subject) => avgMarksBySubjects.push(this.getAverageBySubject(subject)));
		if (avgMarksBySubjects.length === 0) return 0;
		return avgMarksBySubjects.reduce((sum, mark) => sum + mark) / avgMarksBySubjects.length;
	}
}