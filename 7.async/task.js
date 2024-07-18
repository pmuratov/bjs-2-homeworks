class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId;
  }

  addClock(time, callback) {
    if (!time || !callback) {
      throw new Error("Отсутствуют обязательные аргументы");
    } else {
      this.alarmCollection.forEach((elem) => {
        if (elem.time === time) {
          console.warn("Уже присутствует звонок на это же время");
        } else {
          alarmCollection.push({
            time: time,
            callback: callback,
            canCall: true,
          });
        }
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
    var d = new Date(date);
    var hours = "" + d.getHours();
    var minutes = "" + d.getMinutes();
    if (minutes.length < 2 || minutes === 0) minutes = "0" + minutes;
    var time = [hours, minutes].join(":");

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
      elem.canCall = true;
    });
  }

  clearAlarms() {
    this.alarmCollection = [];
  }
}
