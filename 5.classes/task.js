class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    this._state *= 1.5;
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

/*
 **Пример использования**


const sherlock = new PrintEditionItem(
  "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
  2019,
  1008
);

console.log(sherlock.releaseDate); //2019
console.log(sherlock.state); //100
sherlock.fix();
console.log(sherlock.state); //100
*/
