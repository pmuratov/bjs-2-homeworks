class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  addClock(time, callback) {
    if (!time || !callback) {
      throw new Error("Отсутствуют обязательные аргументы");
    } else {
      if (this.alarmCollection.some((elem) => elem.time === time)) {
        console.warn("Уже присутствует звонок на это же время");
      }

      this.alarmCollection.push({
        time: time,
        callback: callback,
        canCall: true,
      });
    }
  }

  removeClock(time) {
    for (let i = 0; i < this.alarmCollection.length; i++) {
      let elem = this.alarmCollection[i];
      if (elem.time === time) {
        this.alarmCollection.splice(i, 1);
      }
    }
  }

  getCurrentFormattedTime() {
    return new Date().toLocaleTimeString();
  }

  start() {
    if (this.intervalId) {
      return;
    }
    (this.intervalId = setInterval(() => {
      this.alarmCollection.forEach((elem) => {
        if (elem.time === this.getCurrentFormattedTime() && elem.canCall) {
          elem.canCall = false;
          elem.callback();
        }
      });
    })),
      1000;
  }
  /*
      Проверьте скобки интервала…Значение 1000 должно передаваться после колбека в интервал, а присвоение не нужно оборачивать в скобки.

*/
  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  resetAllCalls() {
    this.alarmCollection.forEach((elem) => {
      elem.canCall = false;
    });
  }

  clearAlarms() {
    this.alarmCollection = [];
    this.stop();
  }
}

let test = new AlarmClock();

test.addClock("17:00", () => console.log("Wake up!"));
test.addClock("17:01", () => console.log("Wake up!!"));
test.addClock("17:02", () => console.log("Wake up!!!"));
test.addClock("17:03", () => console.log("Wake up!!!!"));

test.start();
console.log(test);
