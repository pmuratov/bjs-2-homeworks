class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    let intervalId;
    this.intervalId = intervalId;
  }

  addClock(time, callback) {
    if (!time || !callback) {
      throw new Error("Отсутствуют обязательные аргументы");
    } else {
      let error = false;

      this.alarmCollection.forEach((elem) => {
        if (elem.time === time) {
          console.warn("Уже присутствует звонок на это же время");
          error = true;
        }
      });
      if (!error) {
        this.alarmCollection.push({
          time: time,
          callback: callback,
          canCall: true,
        });
      }
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
    let timezoneOffset = new Date().getTimezoneOffset() / 60;
    //    console.log(timezoneOffset) //почему ноль то ??

    let d = new Date(
      new Date(new Date().setHours(new Date().getHours() - timezoneOffset))
    );
    let hours = "" + d.getHours();
    let minutes = "" + d.getMinutes();
    if (minutes.length < 2 || minutes === 0) minutes = "0" + minutes;
    let time = [hours, minutes].join(":");

    return time;
  }

  start() {
    if (this.intervalId) {
      return;
    } else {
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
  }

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
  }
}

let test = new AlarmClock();

test.addClock("17:00", () => console.log("Wake up!"));
test.addClock("17:01", () => console.log("Wake up!!"));
test.addClock("17:02", () => console.log("Wake up!!!"));
test.addClock("17:03", () => console.log("Wake up!!!!"));

test.start();
console.log(test);
