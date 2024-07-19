class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  addClock(time, callback) {
    if (!time || !callback) {
      throw new Error("Отсутствуют обязательные аргументы");
    }
    if (this.alarmCollection.some((elem) => elem.time === time)) {
      console.warn("Уже присутствует звонок на это же время");
    }

    this.alarmCollection.push({
      time: time,
      callback: callback,
      canCall: true,
    });
  }

  removeClock(time) {
    for (let i = 0; i < this.alarmCollection.length; i++) {
      let elem = this.alarmCollection[i];
      if (elem.time === time) {
        this.alarmCollection.splice(i, 1);
      }
    }
  }

  removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter(
      (alarm) => alarm.time != time
    );
  }

  getCurrentFormattedTime() {
    /*
    return new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    */
    let d = new Date();
    return [d.getHours(), d.getMinutes()].join(":");
  }

  start() {
    if (this.intervalId) {
      return;
    }
    this.intervalId = setInterval(() => {
      this.alarmCollection.forEach((elem) => {
        if (elem.time === this.getCurrentFormattedTime() && elem.canCall) {
          elem.canCall = false;
          elem.callback();
        }
      });
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  resetAllCalls() {
    this.alarmCollection.forEach((elem) => {
      elem.canCall = true;
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
console.log(test.alarmCollection);

test.removeClock("17:00");
console.log(test.alarmCollection);

console.log(test.getCurrentFormattedTime());
//test.start();
//console.log(test);
