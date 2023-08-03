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
		let findResult = null;

		this.books.forEach((book) => {
			if ((type in book) && (Object.values(book).includes(value))) {
				findResult = book;
			}
		});
		return findResult;

	}

	// Выдача книги из хранилища
	giveBookByName(bookName) {
		let givenBook = null;

		this.books.forEach((book, bookIndex) => {
			if (Object.values(book).includes(bookName)) {
				[givenBook] = this.books.splice(bookIndex, 1);
			}
		});
		return givenBook;
	}
}