class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    this.state *= 1.5;
  }

  set state(digit) {
    if (digit <= 0) {
      this._state = 0;
    } else if (digit >= 100) {
      this._state = 100;
    } else {
      this._state = digit;
    }
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }
  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    const result = this.books.find((book) => book[type] === value);
    return result ? result : null;
  }

  /*
  findBookBy(type, value){
    this.books.forEach(el => {
      for(var prop in el){
        console.log(el[prop])
        if(el.prop === type && el[prop] === value){
          return el
        } else {
          return null;
        }
      }
    });
  }
*/

  giveBookByName(bookName) {
    this.books.forEach((el) => {
      if ((el.name = bookName)) {
        return el;
      } else {
        return null;
      }
    });
  }
}
